# VS Code Extensions for PreEmptive JSDefender

This unpublished pacakge is a placeholder for all VS Code extensions we plan to implement and publish for PreEmptive JSDefender.

## Intellisense for `jsdefender.config.json`

When you edit a `jsdefender.config.json` file, this extension provides IntelliSense while editing the configuration. The extension also supports to use this schema with files having an `.jsdconfig` extensions, but to enable this feature, you should configure your user or workspace settings manually.

Add this entry to the `settings.json` file within the `.vscode` folder:

```javascript
"files.associations": {
  "*.jsdconfig": "json"
}
```
