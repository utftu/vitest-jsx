import {it} from 'vitest'
import {jsx} from '../jsx/jsx-dev-runtime.ts'

console.log('-----', 'jsx', jsx);

// @vitest-environment jsdom

it('string', () => {
  const Hello = () => <div>hello</div>
  const a = <Hello/>

  console.log('-----', 'a', a);
})