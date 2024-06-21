# Contributing

## Versioning a Release

1. Update verion in `package.json`
2. Commit version, e.g. `git commit -m "1.2.3"`
3. Tag version commit, e.g. `git tag -a v1.2.3`
4. Add release notes, see `Release Notes Sample`
5. Push commit and tag, e.g. `git push && git push origin v1.2.3`
6. Publish to npm, e.g. `npm publish`

## Release Notes Sample

```
1.2.3 - 2021-02-23 [title]

Added

- template command: Create from template option
- Added to maintain accessibility standards not retained through cloning
```
