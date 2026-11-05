# TypeScript Important Commands

My personal cheat sheet for learning TypeScript.

---

## 1. Setup

### Install TypeScript globally

```bash
npm install -g typescript
```

- Installs the `tsc` (TypeScript Compiler) command on your whole computer.
- Use it once. After that, `tsc` works in every project.
- Note: `tsc -g` is not a real command. The correct way is
  `npm install -g typescript`.

### Check the installed version

```bash
tsc -v
```

- Shows the TypeScript version.
- Use it to confirm the installation worked.

### Create a project (optional but recommended)

```bash
npm init -y
```

- Creates a `package.json` file.
- Use it when you want to install packages like `tsx`.

---

## 2. Configuration

### Create the config file

```bash
tsc --init
```

- Creates a `tsconfig.json` file.
- This file tells TypeScript how to compile your code.
- Run it once at the start of every project.
- Useful options inside `tsconfig.json`:
  - `"rootDir": "./src"` - where your `.ts` files live.
  - `"outDir": "./dist"` - where the compiled `.js` files go.
  - `"strict": true` - turns on strong type checking (recommended).

---

## 3. Compile for the Browser

Browsers cannot run `.ts` files. TypeScript must be compiled into JavaScript
first.

### Compile one time

```bash
tsc
```

- Reads `tsconfig.json` and converts all `.ts` files into `.js` files.
- Runs one time, then stops.
- Link the output `.js` file in your HTML:

```html
<script src="./dist/index.js"></script>
```

- Open the HTML file in the browser to see the output.
- After every change, run `tsc` again and refresh the browser.

### Compile live (watch mode)

```bash
tsc --watch
```

- Keeps running in the terminal.
- Re-compiles automatically every time you save a `.ts` file.
- You only need to refresh the browser to see the new result.
- Stop it with `Ctrl + C`.
- Short form: `tsc -w`

---

## 4. Run in the Terminal (Node.js)

This is the fastest way to practice. There is no compile step and no HTML file
needed.

### Install tsx (recommended)

```bash
npm install -D tsx
```

- `tsx` runs TypeScript files directly.
- `npx` can also download it temporarily if it is not installed.

### Run one time

```bash
npx tsx src/fileName.ts
```

- Runs the file once and shows the output in the terminal.
- Example: `npx tsx src/index.ts`

### Run live (watch mode)

```bash
npx tsx watch src/fileName.ts
```

- Runs the file and re-runs it every time you save.
- Output updates live in the terminal.
- Stop it with `Ctrl + C`.

---

## 5. Quick Summary

- `npm install -g typescript` - install the TypeScript compiler globally.
- `tsc -v` - check the version.
- `tsc --init` - create `tsconfig.json`.
- `tsc` - compile once, use the output in the browser.
- `tsc --watch` - compile live, use the output in the browser.
- `npx tsx src/fileName.ts` - run once in the terminal.
- `npx tsx watch src/fileName.ts` - run live in the terminal.

---

## 6. Which One Should I Use?

- Practicing TypeScript logic - use `npx tsx watch src/fileName.ts`.
- Building something for the browser (DOM, HTML) - use `tsc --watch`.
- Final production build - use `tsc`.
