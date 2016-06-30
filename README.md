module内の`let`値をglobal設定的に扱うやり方の話

```
% node index.js                                                            
{ foo: 'default_foo', baz: 'default_baz' }
{ foo: 'overwrite_foo', baz: 'overwrite_baz' }
{ foo: 'overwrite_foo', baz: 'overwrite_baz' }
```

やってる事例・参考文献
- https://github.com/acdlite/recompose/blob/master/src/packages/recompose/setObservableConfig.js
