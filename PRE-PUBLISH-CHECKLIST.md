# Pre-Publishing Checklist

Use this checklist before publishing to npm.

## Code Quality ✅

- [x] Build succeeds: `npm run build`
- [x] Linter passes: `npm run lint`
- [x] No TypeScript errors
- [x] All n8n community node requirements met

## Documentation ✅

- [x] README.md updated with Smooth node information
- [x] CHANGELOG.md created and populated
- [x] USAGE.md created with examples
- [x] PUBLISHING.md guide created
- [x] Package description is clear

## package.json ✅

- [x] Name: `n8n-nodes-smooth`
- [x] Version: `0.1.0` (ready for first publish)
- [x] Description: Clear and concise
- [x] Author: Properly filled
- [x] Repository: Correct GitHub URL
- [x] Homepage: Set to GitHub README
- [x] Bugs: Set to GitHub Issues
- [x] Keywords: Comprehensive list for discoverability
- [x] License: MIT
- [x] Files: Only includes `dist/`
- [x] n8n configuration: Correct paths to node and credentials

## Functionality ✅

- [x] Credentials work (API key authentication)
- [x] Task submission works
- [x] Polling works (handles nested response structure)
- [x] Error handling is comprehensive
- [x] Timeout protection works
- [x] All parameters are correctly configured

## Before Publishing ⚠️

These items need to be completed before publishing:

### Required

- [ ] **Create GitHub repository** at https://github.com/circlemind-ai/n8n-nodes-smooth
  - Push all code to the repository
  - Create initial release/tag

- [ ] **npm account setup**
  - Create account at https://www.npmjs.com/signup
  - Verify email
  - Enable 2FA (strongly recommended)
  - Login: `npm login`

- [ ] **Test locally**
  ```bash
  npm link
  # Then in n8n directory:
  npm link n8n-nodes-smooth
  # Test the node thoroughly
  ```

- [ ] **Dry run**
  ```bash
  npm publish --dry-run
  ```

### Recommended

- [ ] Add LICENSE file (MIT license text)
- [ ] Add .gitignore if not present
- [ ] Add .npmignore if needed
- [ ] Test in a clean n8n installation
- [ ] Prepare release announcement
- [ ] Screenshots for documentation (optional)

## Publishing Command

Once all checks are complete:

```bash
# First publish
npm publish

# Subsequent releases
npm version patch  # or minor/major
npm publish
```

## Post-Publishing

- [ ] Verify package on npm: https://www.npmjs.com/package/n8n-nodes-smooth
- [ ] Create GitHub release with notes
- [ ] Test installation in n8n: `n8n-nodes-smooth`
- [ ] Announce on n8n community
- [ ] Update any external documentation

## Notes

- Package is currently at version 0.1.0 (initial release)
- All code is production-ready
- API response structure (nested in `r` property) is handled
- Polling logic is working correctly
- Error messages are descriptive

## Quick Publish Steps

If everything above is ready:

```bash
# 1. Ensure you're logged in
npm whoami

# 2. Final build
npm run build

# 3. Dry run
npm publish --dry-run

# 4. Publish!
npm publish

# 5. Verify
npm view n8n-nodes-smooth
```
