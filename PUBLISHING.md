# Publishing Guide for n8n-nodes-smooth

This guide covers how to publish the n8n-nodes-smooth package to the npm registry.

## Prerequisites

### 1. npm Account Setup

1. Create an npm account at https://www.npmjs.com/signup
2. Verify your email address
3. Enable Two-Factor Authentication (2FA):
   - Go to https://www.npmjs.com/settings/YOUR_USERNAME/tfa
   - Choose "Authorization and Publishing" (recommended)
   - Follow the setup instructions

### 2. Login to npm

```bash
npm login
```

Enter your credentials when prompted. If you have 2FA enabled, you'll need your authentication code.

### 3. Verify Package Access

Check that the package name is available:

```bash
npm search n8n-nodes-smooth
```

If nothing appears, the name is available!

## Pre-Publishing Checklist

Before publishing, ensure:

- [ ] All code is committed to git
- [ ] Tests pass (if applicable)
- [ ] Build succeeds: `npm run build`
- [ ] Linting passes: `npm run lint`
- [ ] README.md is complete and accurate
- [ ] CHANGELOG.md is updated with version changes
- [ ] package.json version is correct
- [ ] All files in `dist/` are production-ready

## Publishing Steps

### 1. Clean Build

```bash
# Clean any previous builds
rm -rf dist

# Build the package
npm run build
```

### 2. Test the Package Locally

Link the package locally to test it:

```bash
# In this directory
npm link

# In your n8n installation directory
npm link n8n-nodes-smooth

# Test the node in n8n
# When done testing:
npm unlink n8n-nodes-smooth
```

### 3. Version Update

Update the version in `package.json` following [Semantic Versioning](https://semver.org/):

- **Patch** (0.1.0 → 0.1.1): Bug fixes
- **Minor** (0.1.0 → 0.2.0): New features, backward compatible
- **Major** (0.1.0 → 1.0.0): Breaking changes

```bash
# Or use npm version command
npm version patch  # for 0.1.0 -> 0.1.1
npm version minor  # for 0.1.0 -> 0.2.0
npm version major  # for 0.1.0 -> 1.0.0
```

### 4. Update CHANGELOG

Update `CHANGELOG.md` with the new version and changes.

### 5. Commit and Tag

```bash
git add .
git commit -m "Release v0.1.0"
git tag v0.1.0
git push origin main --tags
```

### 6. Publish to npm

**Dry run first** (recommended):

```bash
npm publish --dry-run
```

This shows what will be published without actually publishing.

**Actual publish:**

```bash
npm publish
```

If you have 2FA enabled, you'll be prompted for an authentication code.

### 7. Verify Publication

Check that the package is live:

```bash
npm view n8n-nodes-smooth
```

Visit the package page:
https://www.npmjs.com/package/n8n-nodes-smooth

## Post-Publishing

### 1. Announce the Release

- Create a GitHub Release with release notes
- Share on relevant communities (n8n forum, Discord, etc.)
- Update any documentation

### 2. Monitor Issues

Watch for:
- GitHub issues
- npm download stats
- User feedback

## Updating the Package

For subsequent releases:

1. Make your changes
2. Update version in `package.json`
3. Update `CHANGELOG.md`
4. Build: `npm run build`
5. Test locally
6. Commit and tag
7. Publish: `npm publish`

## Using npm Scripts

The package includes helpful scripts:

```bash
# Build
npm run build

# Lint
npm run lint
npm run lint:fix

# Watch mode for development
npm run build:watch

# Release (automated versioning)
npm run release

# Pre-publish checks (runs automatically before publish)
npm run prepublishOnly
```

## Troubleshooting

### "Package name already exists"

If the package name is taken, you'll need to:
1. Choose a different name (e.g., `@your-org/n8n-nodes-smooth`)
2. Update `package.json` name field
3. Try publishing again

### "Authentication required"

Make sure you're logged in:

```bash
npm whoami
npm login
```

### "2FA code required"

If you have 2FA enabled and weren't prompted:

```bash
npm publish --otp=YOUR_6_DIGIT_CODE
```

### Build Errors

```bash
# Clean and rebuild
rm -rf dist node_modules
npm install
npm run build
```

## Best Practices

1. **Always test locally** before publishing
2. **Use semantic versioning** consistently
3. **Keep CHANGELOG updated** for every release
4. **Write detailed commit messages**
5. **Tag releases** in git
6. **Create GitHub releases** with notes
7. **Monitor for security issues**: `npm audit`
8. **Keep dependencies updated**

## Resources

- [npm Publishing Documentation](https://docs.npmjs.com/cli/v10/commands/npm-publish)
- [n8n Community Nodes Guide](https://docs.n8n.io/integrations/community-nodes/)
- [Semantic Versioning](https://semver.org/)
- [package.json Documentation](https://docs.npmjs.com/cli/v10/configuring-npm/package-json)
