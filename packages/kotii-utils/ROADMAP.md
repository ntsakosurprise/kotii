# Kotii-Utils Roadmap

## Phase 1: Core Utilities (v1.0)

**Goal:** Establish the foundational string and storage utilities.

### String Utilities

- [x] `capitalizeFirstLetter(str: string): string`
- [x] `capitalizeLastLetter(str: string): string`
- [ ] `toCamelCase(str: string): string`
- [ ] `toKebabCase(str: string): string`
- [ ] `truncate(str: string, length: number): string`

### Storage Utilities

- [x] `getFromStorage(key: string): any`
- [x] `setInStorage(key: string, value: any): void`
- [x] `removeFromStorage(key: string): void`
- [ ] `clearStorage(): void`
- [ ] `hasKey(key: string): boolean`

---

## Phase 2: Advanced Utilities (v1.5)

**Goal:** Introduce more advanced and helpful utilities.

### Array Utilities

- [ ] `unique(array: any[]): any[]`
- [ ] `flatten(array: any[]): any[]`
- [ ] `chunk(array: any[], size: number): any[][]`

### Object Utilities

- [ ] `deepClone(obj: object): object`
- [ ] `mergeObjects(target: object, source: object): object`
- [ ] `pick(obj: object, keys: string[]): object`
- [ ] `omit(obj: object, keys: string[]): object`

---

## Phase 3: Helpers & Integrations (v2.0)

**Goal:** Provide helper functions and browser/node integrations.

### Helpers

- [ ] `debounce(func: Function, delay: number): Function`
- [ ] `throttle(func: Function, delay: number): Function`
- [ ] `generateUUID(): string`

### Integrations

- [ ] `saveToSessionStorage(key: string, value: any): void`
- [ ] `getFromSessionStorage(key: string): any`
- [ ] `removeFromSessionStorage(key: string): void`

---

## Phase 4: Documentation & Examples (v2.5)

**Goal:** Improve developer experience.

- [ ] Comprehensive documentation site
- [ ] Example projects using `kotii-utils`
- [ ] Tutorials and guides
- [ ] Automated testing for all utilities

---

## Phase 5: Community & Maintenance (v3.0)

**Goal:** Build a sustainable ecosystem around `kotii-utils`.

- [ ] Create a GitHub repository with issue templates
- [ ] Accept community contributions
- [ ] Regularly release updates and fixes
- [ ] Maintain changelog and roadmap publicly
