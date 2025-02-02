# COMMIT STANDARDS GUIDLINES

## **_Guidlines_**

### Subject Line

- It should describe what the commit will do if applied
- It should be capitalized
- It should not end in a period
- It should be followed by a blank line(if followed by a commit body)
- It should be in an imperative form, e.g,"Add line" instead of "Adds line" or "Added line".
- It should atmost be 72 characters long

### Header(Issue) Line

- References to issues should be contained on their own line after the subject line.
- Issue line should be preceded by ticket numbers in square brackets.
- Issue line should include issue title of the issue

### Commit Body

- It should describe What has been done and Why it has been done.
- Commit body paragraphs should be uppercased
- Bullet points can be used in the commit body
- Use either hyphen or asterisk to represent bullet points.
- Bullet point character should be followed by a space

### Commit Footer

- It should include information that help add more meaning to the commit
- It is optional
- It can have legends such as ticket numbers, commit author, and any potential tester

### Commit References

- It should include identifiable references such links to tickets or related resources
- It can include inline-links
- It can include links as references

### Commit Categories

## Commit types

#### **_Commit types referenced from_**:

- [conventional-commit-types](https://github.com/pvdlg/conventional-commit-types)

| Commit Type | Title                    | Description                                                                                                 | Emoji |
| ----------- | ------------------------ | ----------------------------------------------------------------------------------------------------------- | :---: |
| `feat`      | Features                 | A new feature                                                                                               |  ✨   |
| `fix`       | Bug Fixes                | A bug Fix                                                                                                   |  🐛   |
| `docs`      | Documentation            | Documentation only changes                                                                                  |  📚   |
| `style`     | Styles                   | Changes that do not affect the meaning of the code (white-space, formatting, missing semi-colons, etc)      |  💎   |
| `refactor`  | Code Refactoring         | A code change that neither fixes a bug nor adds a feature                                                   |  📦   |
| `perf`      | Performance Improvements | A code change that improves performance                                                                     |  🚀   |
| `test`      | Tests                    | Adding missing tests or correcting existing tests                                                           |  🚨   |
| `build`     | Builds                   | Changes that affect the build system or external dependencies (example scopes: gulp, broccoli, npm)         |   🛠   |
| `ci`        | Continuous Integrations  | Changes to our CI configuration files and scripts (example scopes: Travis, Circle, BrowserStack, SauceLabs) |  ⚙️   |
| `chore`     | Chores                   | Other changes that don't modify src or test files                                                           |  ♻️   |
| `revert`    | Reverts                  | Reverts a previous commit                                                                                   |   🗑   |

#### **_please refer to the link below for a commit skeleton_**

- [commit skeleton](./commit-skeleton.md)
