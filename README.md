# Routes Builder

Build routes from string by setting parameters and queries.

# Installation
`npm install --save @nityantik/routes-builder`.

# Description

- Having lots of stuff to look at makes things clearer.
- It's cool 'cause you can keep all the routes in one spot, so it's easier to keep track of and fix them if needed.

# Usage

```
import RoutesBuilder from '@nityantik/routes-builder'

let route = RoutesBuilder.route('/api/users/{id}');
route.param('id', '1');
route.query('token', 'abc');
route.get(); //return /api/users/1?token=abc
```

# Examples

```typescript
import RoutesBuilder from '@nityantik/routes-builder';

class UserService {

  private baseUrl = 'https://base-url.test';

  get(id: number) {
    let route = RoutesBuilder
      .route('/api/users/{id}')
      .param('id', id);
    http.get(this.baseUrl + route.get()); // https://base-url.test/api/users/1
  }

  search() {
    let route = RoutesBuilder
      .route('/api/users')
      .query('search', 'abc');
    http.get(this.baseUrl + route.get()); //https://base-url.test/api/users?search=abc
  }

}
```

# Licence

MIT License

Copyright (c) 2024 Sagar Patel

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
