import assert from 'node:assert/strict'
import { spawnSync } from 'node:child_process'
import fs from 'node:fs'
import os from 'node:os'
import path from 'node:path'
import test from 'node:test'

for (const scope of ['all', 'main', 'install', 'pkg', 'blog']) {
  test(`release ${scope} configures Git authentication and forwards only that scope`, () => {
    const root = fs.mkdtempSync(path.join(os.tmpdir(), 'dev-web-release-'))
    try {
      fs.mkdirSync(path.join(root, 'bin'))
      const events = path.join(root, 'events')
      fs.writeFileSync(path.join(root, 'bin/gh'), `#!/bin/sh
[ "$GH_TOKEN" = fixture-token ] || exit 9
printf '%s\\n' "$*" >> "$TEST_EVENTS"
case "$1 $2" in
  'auth setup-git') [ "$TEST_FAIL" != auth ] ;;
  'repo clone') mkdir -p "$5" ;;
  *) exit 1 ;;
esac
`, { mode: 0o755 })
      const shell = `
x(){
  case "$1" in
    wsroot) printf '%s' "$TEST_ROOT" ;;
    cd) cd "$2" ;;
    gh) : ;;
    ws) printf '%s\\n' "$*" >> "$TEST_EVENTS"; return "$TEST_STATUS" ;;
    *) return 1 ;;
  esac
}
set -- "$TEST_SCOPE"
. "$TEST_SCRIPT"
`
      for (const [failure, status] of [['', 0], ['', 7], ['auth', 0]]) {
        fs.writeFileSync(events, '')
        const result = spawnSync('bash', ['-c', shell], {
          encoding: 'utf8',
          env: { ...process.env, PATH: `${root}/bin:${process.env.PATH}`, github_token: 'fixture-token', TEST_ROOT: root, TEST_EVENTS: events, TEST_SCRIPT: path.resolve('.x-cmd/release'), TEST_SCOPE: scope, TEST_FAIL: failure, TEST_STATUS: String(status) },
        })
        assert.equal(result.status, failure ? 1 : status, result.stderr)
        const calls = fs.readFileSync(events, 'utf8').trim().split('\n')
        assert.equal(calls[0], 'auth setup-git --hostname github.com')
        if (failure) assert.equal(calls.length, 1)
        else {
          assert.match(calls[1], /^repo clone --no-upstream https:\/\/github.com\/x-cmd\/official-doc.git /)
          assert.equal(calls.at(-1), `ws release ${scope}`)
        }
      }
      assert.match(fs.readFileSync(`.github/workflows/fabu-${scope}.yml`, 'utf8'), new RegExp(`code: x ws release ${scope} \\|\\| true`))
    } finally { fs.rmSync(root, { recursive: true, force: true }) }
  })
}
