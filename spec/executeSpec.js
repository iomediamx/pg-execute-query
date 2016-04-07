/* global describe, it, expect, beforeAll
 */
var execute = require('./../index.js')

describe('Datatabase', function () {
  var con
  beforeAll(function (done) {
    var connection = process.env.DATABASE_URL || 'postgres://localhost/execute-query'
    var queryString = 'select $1::int as num'
    var queryParameters = ['1']
    execute.executeQuery(connection, queryString, queryParameters, callback)
    function callback (err, res) {
      if (err) {
        console.error(err)
      } else {
        con = res
        done()
      }
    }
  })
  it('test connection', function () {
    expect(con[0].num).toEqual(1)
  })
})
