
import React from 'react'
import TestUtils from 'react-addons-test-utils'
import expect from 'expect'
import Cell from '../src/Cell'

describe('Cell', () => {
  let cell

  it('should render')

  context('browser tests', () => {
    if (typeof document === 'undefined') {
      return false
    }

    beforeEach(() => {
      const props = {
        padding: 16
      }
      cell = TestUtils.renderIntoDocument(
        <Cell {...props}>
          Cell
        </Cell>
      )
    })

    it('should render', () => {
      expect(cell).toExist()
    })

    it('should be properly styled', () => {
      const style = cell.refs.cell.getDOMNode().style
      expect(style.boxSizing).toEqual('border-box')
      expect(style.position).toEqual('relative')
      expect(style.paddingLeft).toEqual('16px')
    })
  })

})
