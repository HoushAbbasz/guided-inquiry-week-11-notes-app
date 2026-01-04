# Notes App

CLI notes application built with Node.js that allows you to add, remove, read, edit, and list notes stored in a JSON file. 

## Installation

Make sure you have Node.js installed on your system.

Install all dependencies listed in `package.json`:

```bash
npm install
```


## Commands (within the notes-app directory)

### Add a Note
Add a new note with a title and body.

```bash
node app.js add --title="My First Note" --body="This is the content of my note"
```

**Example:**
```bash
node app.js add --title="Grocery List" --body="Milk, eggs, bread, butter"
```

---

### Remove a Note
Remove a specific note by its title.

```bash
node app.js remove --title="My First Note"
```

**Example:**
```bash
node app.js remove --title="Grocery List"
```

---

### List All Notes
Display the titles of all notes.

```bash
node app.js list
```

---

### Read a Note
Read the full content of a specific note by its title.

```bash
node app.js read --title="My First Note"
```

**Example:**
```bash
node app.js read --title="Grocery List"
```

---

### Edit a Note
Update the body content of an existing note.

```bash
node app.js edit --title="My First Note" --body="Updated content here"
```

**Example:**
```bash
node app.js edit --title="Grocery List" --body="Milk, eggs, bread, butter, cheese"
```

---

### Remove All Notes
Delete all notes at once.

```bash
node app.js removeAll
```

**Warning:** This action cannot be undone


**Complete workflow:**

```bash
# Add some notes
node app.js add --title="Work Tasks" --body="Finish Node Udemy videos"
node app.js add --title="Groceries" --body="Apple sauce, Apple juice, Apple pie"
node app.js add --title="Ideas" --body="Write a blog post about Node.js"

# List all notes
node app.js list

# Read a specific note
node app.js read --title="Work Tasks"

# Edit a note
node app.js edit --title="Work Tasks" --body="Finish Node Udemy videos and send email"

# Remove a note
node app.js remove --title="Groceries"

# Remove all notes
node app.js removeAll
```


## Error Messages

- **"A note with this title already exists!"** - You tried to add a note with a duplicate title
- **"Note not found!"** - The note you're trying to read, edit, or remove doesn't exist
- **"No note found!"** - The note you're trying to remove doesn't exist
