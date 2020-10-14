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

## Installing and Developing the Extension

Prepare the repository in your local development environment:

```
git clone https://github.com/Dotneteer/jsdschema.git
npm install
```

### Updating the schema of the `jsdefender.config.json` file:

1. Update the changes of the JSDefender configuration file in the `src/jsdschema.json` file.
2. Execute the `npm run compile` command.
3. Start the extension with **Run | Run Without Debugging** (Ctrl+F5).
4. Open a folder (create a new folder) with a `jsdefender.config.json` file.
5. As you edit the configuration file, it should provide Intellisense.
