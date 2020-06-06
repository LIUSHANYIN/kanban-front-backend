(this.webpackJsonpmykankan = this.webpackJsonpmykankan || []).push([
  [0],
  {
    18: function (e, t, n) {
      e.exports = n(53);
    },
    23: function (e, t, n) {},
    25: function (e, t, n) {},
    26: function (e, t, n) {},
    27: function (e, t, n) {},
    53: function (e, t, n) {
      "use strict";
      n.r(t);
      var a = n(0),
        r = n.n(a),
        c = n(16),
        o = n.n(c),
        u = (n(23), n(1)),
        s = n.n(u),
        l = n(3),
        i = n(5);
      n(25), n(26);
      function d(e) {
        var t = e.index,
          n = e.handleMoveCard,
          a = e.cardIndex,
          c = e.title,
          o = e.length,
          u = e.columns,
          s = e.handleDeleteCard;
        return r.a.createElement(
          "div",
          { className: "card" },
          0 !== t &&
            r.a.createElement(
              "div",
              { className: "prev" },
              r.a.createElement(
                "button",
                {
                  onClick: function () {
                    return n(t, t - 1, a);
                  },
                },
                "Prev"
              )
            ),
          r.a.createElement("div", { className: "content" }, c),
          r.a.createElement(
            "button",
            {
              onClick: function () {
                s(t, a);
              },
            },
            "Delete ",
            u[t].cards[a].title.substr(0, 3)
          ),
          t !== o &&
            r.a.createElement(
              "div",
              { className: "next" },
              r.a.createElement(
                "button",
                {
                  onClick: function () {
                    return n(t, t + 1, a);
                  },
                },
                "Next"
              )
            )
        );
      }
      n(27);
      function m(e) {
        var t = e.index,
          n = e.title,
          a = e.titleColor,
          c = e.addCardToColumn,
          o = e.cards,
          u = e.moveCard,
          s = e.handleDeleteColumn,
          l = e.length,
          i = e.columns,
          m = e.handleDeleteCard,
          f = e.handleMoveColumn;
        return r.a.createElement(
          "div",
          { className: "column-container" },
          r.a.createElement(
            "div",
            { className: "col-top", style: { backgroundColor: a } },
            0 !== t &&
              r.a.createElement(
                "div",
                { className: "prev" },
                r.a.createElement(
                  "button",
                  {
                    onClick: function () {
                      return f(t, t - 1);
                    },
                  },
                  "Prev"
                )
              ),
            r.a.createElement("div", { className: "header" }, n),
            t !== l &&
              r.a.createElement(
                "div",
                { className: "next" },
                r.a.createElement(
                  "button",
                  {
                    onClick: function () {
                      return f(t, t + 1);
                    },
                  },
                  "Next"
                )
              )
          ),
          r.a.createElement(
            "div",
            { className: "list" },
            o &&
              o.map(function (e, n) {
                return r.a.createElement(d, {
                  handleMoveCard: u,
                  index: t,
                  key: n,
                  title: e.title,
                  cardIndex: n,
                  length: l,
                  columns: i,
                  handleDeleteCard: m,
                });
              })
          ),
          r.a.createElement(
            "div",
            { className: "footer" },
            r.a.createElement(
              "button",
              {
                onClick: function () {
                  var e = window.prompt("Please write a card name");
                  e && c(e, t);
                },
              },
              "+ Add a card"
            )
          ),
          r.a.createElement(
            "button",
            {
              className: "clo-delete",
              onClick: function () {
                "yes" ===
                  window.prompt(
                    "If you do wanna delete this card, input Text yes "
                  ) && s(t);
              },
            },
            "Delete ",
            i[t].title
          )
        );
      }
      var f = n(4),
        v = n.n(f),
        p = "https://shanyinkanban.herokuapp.com/users",
        h = {
          handleFetchDate: function (e) {
            return v.a.get("".concat(p, "/fetch"), { params: { userId: e } });
          },
          serviceAddColumn: function (e, t, n) {
            return v.a.post("".concat(p, "/add"), {
              userId: e,
              columnName: t,
              color: n,
            });
          },
          serviceDeleteColumn: function (e, t) {
            return v.a.post("".concat(p, "/delete"), {
              userId: e,
              columnIndex: t,
            });
          },
          serviceDeleteCard: function (e, t, n) {
            return v.a.post("".concat(p, "/deleteCard"), {
              userId: e,
              columnIndex: t,
              cardIndex: n,
            });
          },
          serviceAddCard: function (e, t, n) {
            return v.a.post("".concat(p, "/addCard"), {
              userId: e,
              columnIndex: t,
              cardName: n,
            });
          },
          serviceMoveCard: function (e, t, n, a) {
            return v.a.post("".concat(p, "/moveCard"), {
              userId: e,
              currentColumn: t,
              nextColumn: n,
              cardIndex: a,
            });
          },
          serviceMoveColumn: function (e, t, n) {
            return v.a.post("".concat(p, "/moveColumn"), {
              userId: e,
              currentColumn: t,
              targetColumn: n,
            });
          },
        },
        C = n(17),
        x = n.n(C);
      var b = function () {
        var e = Object(a.useState)([]),
          t = Object(i.a)(e, 2),
          n = t[0],
          c = t[1],
          o = Object(a.useState)(""),
          u = Object(i.a)(o, 2),
          d = u[0],
          f = u[1],
          v = Object(a.useState)(""),
          p = Object(i.a)(v, 2),
          C = p[0],
          b = p[1],
          w = Object(a.useState)(3),
          k = Object(i.a)(w, 2),
          E = k[0],
          D = k[1],
          y = "5ed705b53d91074e065ef8ca";
        Object(a.useEffect)(function () {
          (function () {
            var e = Object(l.a)(
              s.a.mark(function e() {
                var t;
                return s.a.wrap(function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        return (e.next = 2), h.handleFetchDate(y);
                      case 2:
                        (t = e.sent), c(t.data.data.columnDate);
                      case 5:
                      case "end":
                        return e.stop();
                    }
                }, e);
              })
            );
            return function () {
              return e.apply(this, arguments);
            };
          })()();
        }, []),
          Object(a.useEffect)(
            function () {
              (function () {
                var e = Object(l.a)(
                  s.a.mark(function e() {
                    var t, n;
                    return s.a.wrap(function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (e.next = 2), h.handleFetchDate(y);
                          case 2:
                            (t = e.sent),
                              (n = t.data.data.columnDate.length),
                              D(n - 1);
                          case 5:
                          case "end":
                            return e.stop();
                        }
                    }, e);
                  })
                );
                return function () {
                  return e.apply(this, arguments);
                };
              })()();
            },
            [n, E]
          ),
          Object(a.useEffect)(
            function () {
              !(function () {
                var e = "hsl(" + 360 * Math.random() + ", 100%,75%)";
                b(e);
              })();
            },
            [d]
          ),
          Object(a.useEffect)(
            function () {
              (function () {
                var e = Object(l.a)(
                  s.a.mark(function e() {
                    var t, n;
                    return s.a.wrap(function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (e.next = 2), h.handleFetchDate(y);
                          case 2:
                            (t = e.sent),
                              (n = 380 * t.data.data.columnDate.length + 500),
                              f(n);
                          case 5:
                          case "end":
                            return e.stop();
                        }
                    }, e);
                  })
                );
                return function () {
                  return e.apply(this, arguments);
                };
              })()();
            },
            [d, n]
          );
        var N = (function () {
            var e = Object(l.a)(
              s.a.mark(function e(t, n) {
                var a;
                return s.a.wrap(function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        return (e.next = 2), h.serviceAddCard(y, n, t);
                      case 2:
                        return (e.next = 4), h.handleFetchDate(y);
                      case 4:
                        (a = e.sent), c(a.data.data.columnDate);
                      case 6:
                      case "end":
                        return e.stop();
                    }
                }, e);
              })
            );
            return function (t, n) {
              return e.apply(this, arguments);
            };
          })(),
          j = (function () {
            var e = Object(l.a)(
              s.a.mark(function e(t, n, a) {
                var r;
                return s.a.wrap(function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        return (e.next = 2), h.serviceMoveCard(y, t, n, a);
                      case 2:
                        return (e.next = 4), h.handleFetchDate(y);
                      case 4:
                        (r = e.sent), c(r.data.data.columnDate);
                      case 6:
                      case "end":
                        return e.stop();
                    }
                }, e);
              })
            );
            return function (t, n, a) {
              return e.apply(this, arguments);
            };
          })(),
          O = (function () {
            var e = Object(l.a)(
              s.a.mark(function e() {
                var t, n;
                return s.a.wrap(function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        if (!(t = window.prompt("Please write a list name"))) {
                          e.next = 4;
                          break;
                        }
                        return (e.next = 4), h.serviceAddColumn(y, t, C);
                      case 4:
                        return (e.next = 6), h.handleFetchDate(y);
                      case 6:
                        (n = e.sent), c(n.data.data.columnDate);
                      case 8:
                      case "end":
                        return e.stop();
                    }
                }, e);
              })
            );
            return function () {
              return e.apply(this, arguments);
            };
          })(),
          g = (function () {
            var e = Object(l.a)(
              s.a.mark(function e(t) {
                var n;
                return s.a.wrap(function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        return (e.next = 2), h.serviceDeleteColumn(y, t);
                      case 2:
                        return (e.next = 4), h.handleFetchDate(y);
                      case 4:
                        (n = e.sent), c(n.data.data.columnDate);
                      case 6:
                      case "end":
                        return e.stop();
                    }
                }, e);
              })
            );
            return function (t) {
              return e.apply(this, arguments);
            };
          })(),
          I = (function () {
            var e = Object(l.a)(
              s.a.mark(function e(t, n) {
                var a;
                return s.a.wrap(function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        return (e.next = 2), h.serviceDeleteCard(y, t, n);
                      case 2:
                        return (e.next = 4), h.handleFetchDate(y);
                      case 4:
                        (a = e.sent), c(a.data.data.columnDate);
                      case 6:
                      case "end":
                        return e.stop();
                    }
                }, e);
              })
            );
            return function (t, n) {
              return e.apply(this, arguments);
            };
          })(),
          F = (function () {
            var e = Object(l.a)(
              s.a.mark(function e(t, n) {
                var a;
                return s.a.wrap(function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        return (e.next = 2), h.serviceMoveColumn(y, t, n);
                      case 2:
                        return (e.next = 4), h.handleFetchDate(y);
                      case 4:
                        (a = e.sent), c(a.data.data.columnDate);
                      case 6:
                      case "end":
                        return e.stop();
                    }
                }, e);
              })
            );
            return function (t, n) {
              return e.apply(this, arguments);
            };
          })();
        return r.a.createElement(
          "div",
          { className: "App", style: { width: "".concat(d, "px") } },
          r.a.createElement(
            "div",
            { className: "columns-container" },
            n &&
              n.map(function (e, t) {
                return r.a.createElement(m, {
                  key: t,
                  moveCard: j,
                  addCardToColumn: N,
                  index: t,
                  titleColor: e.color,
                  cards: e.cards,
                  title: e.title,
                  handleDeleteColumn: g,
                  length: E,
                  columns: n,
                  handleDeleteCard: I,
                  handleMoveColumn: F,
                });
              }),
            r.a.createElement(
              "button",
              { onClick: O, className: "clo-bt" },
              "Add a new List"
            )
          ),
          r.a.createElement(
            "div",
            { className: "small-map" },
            n &&
              n.map(function (e, t) {
                return r.a.createElement(
                  "div",
                  { key: x.a.generate(), className: "small-card" },
                  r.a.createElement(
                    "button",
                    {
                      style: { backgroundColor: e.color },
                      onClick: function () {
                        return (
                          (e = t),
                          void window.scrollTo({
                            left: 350 * e,
                            behavior: "smooth",
                          })
                        );
                        var e;
                      },
                    },
                    e.title.substr(0, 10)
                  )
                );
              }),
            r.a.createElement(
              "button",
              {
                onClick: function () {
                  window.scrollTo({ left: d, behavior: "smooth" });
                },
                className: "small-add",
              },
              "Add"
            )
          )
        );
      };
      Boolean(
        "localhost" === window.location.hostname ||
          "[::1]" === window.location.hostname ||
          window.location.hostname.match(
            /^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/
          )
      );
      o.a.render(
        r.a.createElement(r.a.StrictMode, null, r.a.createElement(b, null)),
        document.getElementById("root")
      ),
        "serviceWorker" in navigator &&
          navigator.serviceWorker.ready
            .then(function (e) {
              e.unregister();
            })
            .catch(function (e) {
              console.error(e.message);
            });
    },
  },
  [[18, 1, 2]],
]);
//# sourceMappingURL=main.4a3dfd6c.chunk.js.map
