(function (Kotlin) {
  'use strict';
  var _ = Kotlin.defineRootPackage(null, /** @lends _ */ {
    prat: Kotlin.definePackage(null, /** @lends _.prat */ {
      Ajax: Kotlin.createClass(null, function (url, type, data, contentType, dataType, headers, success) {
        if (type === void 0)
          type = 'POST';
        if (contentType === void 0)
          contentType = 'application/json; charset=utf-8';
        if (dataType === void 0)
          dataType = 'json';
        this.url = url;
        this.type = type;
        this.data = data;
        this.contentType = contentType;
        this.dataType = dataType;
        this.headers = headers;
        this.success = success;
      }, /** @lends _.prat.Ajax.prototype */ {
        component1: function () {
          return this.url;
        },
        component2: function () {
          return this.type;
        },
        component3: function () {
          return this.data;
        },
        component4: function () {
          return this.contentType;
        },
        component5: function () {
          return this.dataType;
        },
        component6: function () {
          return this.headers;
        },
        component7: function () {
          return this.success;
        },
        copy_pcdg96$: function (url, type, data, contentType, dataType, headers, success) {
          return new _.prat.Ajax(url === void 0 ? this.url : url, type === void 0 ? this.type : type, data === void 0 ? this.data : data, contentType === void 0 ? this.contentType : contentType, dataType === void 0 ? this.dataType : dataType, headers === void 0 ? this.headers : headers, success === void 0 ? this.success : success);
        },
        toString: function () {
          return 'Ajax(url=' + Kotlin.toString(this.url) + (', type=' + Kotlin.toString(this.type)) + (', data=' + Kotlin.toString(this.data)) + (', contentType=' + Kotlin.toString(this.contentType)) + (', dataType=' + Kotlin.toString(this.dataType)) + (', headers=' + Kotlin.toString(this.headers)) + (', success=' + Kotlin.toString(this.success)) + ')';
        },
        hashCode: function () {
          var result = 0;
          result = result * 31 + Kotlin.hashCode(this.url) | 0;
          result = result * 31 + Kotlin.hashCode(this.type) | 0;
          result = result * 31 + Kotlin.hashCode(this.data) | 0;
          result = result * 31 + Kotlin.hashCode(this.contentType) | 0;
          result = result * 31 + Kotlin.hashCode(this.dataType) | 0;
          result = result * 31 + Kotlin.hashCode(this.headers) | 0;
          result = result * 31 + Kotlin.hashCode(this.success) | 0;
          return result;
        },
        equals_za3rmp$: function (other) {
          return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.url, other.url) && Kotlin.equals(this.type, other.type) && Kotlin.equals(this.data, other.data) && Kotlin.equals(this.contentType, other.contentType) && Kotlin.equals(this.dataType, other.dataType) && Kotlin.equals(this.headers, other.headers) && Kotlin.equals(this.success, other.success)))));
        }
      }),
      get_kgw34i$: function (url, headers, loaded) {
        $.get(url, headers, loaded);
      },
      post_u2l9b0$: function (ajaxRequest) {
        $.ajax(ajaxRequest);
      },
      createInfoDiv_61zpoe$f: function (position) {
        return function (it) {
          Kotlin.println('lat ' + it.coords.latitude + ' long ' + it.coords.longitude);
          position.v = it.coords.latitude + ',' + it.coords.longitude;
        };
      },
      f: function () {
        this.unaryPlus_pdl1w0$('Loading...');
      },
      f_0: function () {
        this.br();
        this.br();
        this.br();
        this.br();
        this.br();
        this.br();
        this.br();
        _.prat.spinner_4wh9n3$(this, new _.prat.SpinnerOptions(void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, 0.25));
        Kotlin.modules['Yested'].net.yested.bootstrap.aligned_3834vs$(this, Kotlin.modules['Yested'].net.yested.bootstrap.TextAlign.object.CENTER, _.prat.f);
      },
      createInfoDiv_61zpoe$f_0: function () {
        this.div_kb10gb$(void 0, void 0, _.prat.f_0);
      },
      f_1: function (invite) {
        return function () {
          this.unaryPlus_pdl1w0$(invite.from.firstName + "'d like to send you a free ride.");
        };
      },
      f_2: function (invite) {
        return function () {
          Kotlin.modules['Yested'].net.yested.bootstrap.aligned_3834vs$(this, Kotlin.modules['Yested'].net.yested.bootstrap.TextAlign.object.CENTER, _.prat.f_1(invite));
        };
      },
      f_3: function (invite) {
        return function () {
          this.col_scryt2$([new Kotlin.modules['Yested'].net.yested.bootstrap.Medium(12)], _.prat.f_2(invite));
        };
      },
      f_4: function (invite) {
        return function () {
          this.unaryPlus_pdl1w0$('"' + invite.message + '"');
        };
      },
      f_5: function (invite) {
        return function () {
          Kotlin.modules['Yested'].net.yested.bootstrap.aligned_3834vs$(this, Kotlin.modules['Yested'].net.yested.bootstrap.TextAlign.object.CENTER, _.prat.f_4(invite));
        };
      },
      f_6: function (invite) {
        return function () {
          this.em_6csr66$(_.prat.f_5(invite));
        };
      },
      f_7: function (invite, this$) {
        return function () {
          this$.h4_6csr66$(_.prat.f_6(invite));
        };
      },
      f_8: function (invite) {
        return function () {
          this.unaryPlus_pdl1w0$('Destination: ' + invite.destinationAddress);
        };
      },
      f_9: function (invite, this$) {
        return function () {
          Kotlin.modules['Yested'].net.yested.bootstrap.aligned_3834vs$(this$, Kotlin.modules['Yested'].net.yested.bootstrap.TextAlign.object.CENTER, _.prat.f_8(invite));
        };
      },
      f_10: function () {
        this.unaryPlus_pdl1w0$('Reject');
      },
      f_11: function (it) {
        Kotlin.println('ajaxPost id : ' + it._id);
        Kotlin.println('ajaxPost status : ' + it.status);
      },
      f_12: function (inviteTemplate, resourceUrl) {
        return function (it) {
          var data = inviteTemplate.replace('"status": "PENDING"', '"status": "REJECT"');
          Kotlin.modules['Yested'].net.yested.ajaxPost_f0flkx$(new Kotlin.modules['Yested'].net.yested.AjaxRequest(resourceUrl, 'PUT', data, void 0, void 0, _.prat.f_11));
        };
      },
      f_13: function () {
        this.unaryPlus_pdl1w0$('Accept');
      },
      f_14: function (it) {
        Kotlin.println('ajaxPost id : ' + it._id);
        Kotlin.println('ajaxPost status : ' + it.status);
      },
      f_15: function (it) {
      },
      f_16: function (inviteTemplate, position, dataTemplate, resourceUrl, pushUrl) {
        return function (it) {
          var inviteData = inviteTemplate.replace('"status": "PENDING"', '"status": "ACCEPT"').replace('"pickupAddress": ""', '"' + 'pickupAddress' + '"' + ': ' + '"' + position.v + '"');
          var pushData = dataTemplate.replace('"invite": "inviteData"', '"' + 'invite' + '"' + ': ' + inviteData);
          Kotlin.println('position : ' + position.v);
          Kotlin.modules['Yested'].net.yested.ajaxPost_f0flkx$(new Kotlin.modules['Yested'].net.yested.AjaxRequest(resourceUrl, 'PUT', inviteData, void 0, void 0, _.prat.f_14));
          Kotlin.println('pushData : ' + pushData);
          _.prat.post_u2l9b0$(new _.prat.Ajax(pushUrl, 'POST', pushData, void 0, void 0, Kotlin.modules['stdlib'].kotlin.js.json_eoa9s7$([Kotlin.modules['stdlib'].kotlin.to_l1ob02$('X-Parse-Application-Id', '65czy0cGczUQ4btL7K4ouIPS8GkZtMnLzAfN5N0T'), Kotlin.modules['stdlib'].kotlin.to_l1ob02$('X-Parse-REST-API-Key', 'EWDEJpmhNCqZcH5pfPJzyOSLrcK32L9pBvvFKfci'), Kotlin.modules['stdlib'].kotlin.to_l1ob02$('Content-Type', 'application/json')]), _.prat.f_15));
        };
      },
      f_17: function (inviteTemplate, resourceUrl, position, dataTemplate, pushUrl) {
        return function () {
          Kotlin.modules['Yested'].net.yested.bootstrap.btsButton_ghocd8$(this, Kotlin.modules['Yested'].net.yested.ButtonType.object.BUTTON, _.prat.f_10, void 0, void 0, void 0, void 0, _.prat.f_12(inviteTemplate, resourceUrl));
          this.nbsp_za3lpa$();
          Kotlin.modules['Yested'].net.yested.bootstrap.btsButton_ghocd8$(this, Kotlin.modules['Yested'].net.yested.ButtonType.object.BUTTON, _.prat.f_13, Kotlin.modules['Yested'].net.yested.bootstrap.ButtonLook.object.SUCCESS, void 0, void 0, void 0, _.prat.f_16(inviteTemplate, position, dataTemplate, resourceUrl, pushUrl));
        };
      },
      f_18: function (inviteTemplate, resourceUrl, position, dataTemplate, pushUrl) {
        return function () {
          this.unaryPlus_pv6laa$(this.div_kb10gb$(void 0, void 0, _.prat.f_17(inviteTemplate, resourceUrl, position, dataTemplate, pushUrl)));
        };
      },
      f_19: function (inviteTemplate, resourceUrl, position, dataTemplate, pushUrl, this$) {
        return function () {
          Kotlin.modules['Yested'].net.yested.bootstrap.aligned_3834vs$(this$, Kotlin.modules['Yested'].net.yested.bootstrap.TextAlign.object.CENTER, _.prat.f_18(inviteTemplate, resourceUrl, position, dataTemplate, pushUrl));
        };
      },
      f_20: function (invite, inviteTemplate, resourceUrl, position, dataTemplate, pushUrl) {
        return function () {
          _.prat.row_yqo6f9$(this, _.prat.f_3(invite));
          this.br();
          _.prat.row_yqo6f9$(this, _.prat.f_7(invite, this));
          this.br();
          _.prat.row_yqo6f9$(this, _.prat.f_9(invite, this));
          _.prat.row_yqo6f9$(this, _.prat.f_19(inviteTemplate, resourceUrl, position, dataTemplate, pushUrl, this));
        };
      },
      createInfoDiv_61zpoe$f_1: function (placeholder, position) {
        return function (invite) {
          Kotlin.println('id ' + invite._id);
          var resourceUrl = 'https://intense-waters-9652.herokuapp.com/invites/' + invite._id;
          var pushUrl = 'https://api.parse.com/1/push';
          var inviteTemplate = '\n' + '                      {' + '\n' + '                        ' + '"' + 'from' + '"' + ': {' + '\n' + '                          ' + '"' + 'firstName' + '"' + ': ' + '"' + invite.from.firstName + '"' + ',' + '\n' + '                          ' + '"' + 'lastName' + '"' + ': ' + '"' + invite.from.lastName + '"' + ',' + '\n' + '                          ' + '"' + 'phoneNumber' + '"' + ': ' + '"' + invite.from.phoneNumber + '"' + '\n' + '                        },' + '\n' + '                        ' + '"' + 'to' + '"' + ': {' + '\n' + '                          ' + '"' + 'firstName' + '"' + ': ' + '"' + invite.to.firstName + '"' + ',' + '\n' + '                          ' + '"' + 'lastName' + '"' + ': ' + '"' + invite.to.lastName + '"' + ',' + '\n' + '                          ' + '"' + 'phoneNumber' + '"' + ': ' + '"' + invite.to.phoneNumber + '"' + '\n' + '                        },' + '\n' + '                        ' + '"' + 'destinationLatLng' + '"' + ': ' + '"' + invite.destinationLatLng + '"' + ',' + '\n' + '                        ' + '"' + 'destinationAddress' + '"' + ': ' + '"' + invite.destinationAddress + '"' + ',' + '\n' + '                        ' + '"' + 'message' + '"' + ': ' + '"' + invite.message + '"' + ',' + '\n' + '                        ' + '"' + 'status' + '"' + ': ' + '"' + 'PENDING' + '"' + ',' + '\n' + '                        ' + '"' + 'pickupAddress' + '"' + ': ' + '"' + '"' + ',' + '\n' + '                        ' + '"' + '_id' + '"' + ': ' + '"' + invite._id + '"' + '\n' + '                      }' + '\n' + '                      ';
          var dataTemplate = '\n' + '                      {' + '\n' + '                        ' + '"' + 'where' + '"' + ': {' + '\n' + '                          ' + '"' + 'user' + '"' + ': ' + '"' + invite.from.firstName + ' ' + invite.from.lastName + '"' + '\n' + '                        },' + '\n' + '                        ' + '"' + 'data' + '"' + ': {' + '\n' + '                          ' + '"' + 'title' + '"' + ': ' + '"' + 'Summon' + '"' + ',' + '\n' + '                          ' + '"' + 'alert' + '"' + ': ' + '"' + 'Invite status update!' + '"' + ',' + '\n' + '                          ' + '"' + 'uri' + '"' + ' :' + '"' + 'summon://prt2121.summon.com/status' + '"' + ',' + '\n' + '                          ' + '"' + 'invite' + '"' + ': ' + '"' + 'inviteData' + '"' + '\n' + '                        }' + '\n' + '                      }' + '\n' + '                      ';
          placeholder.setChild_5f0h2k$(Kotlin.modules['Yested'].net.yested.with_ji1yox$(new Kotlin.modules['Yested'].net.yested.Div(), _.prat.f_20(invite, inviteTemplate, resourceUrl, position, dataTemplate, pushUrl)));
        };
      },
      createInfoDiv_61zpoe$: function (url) {
        var position = {v: ''};
        _.prat.locate_puvnrn$(_.prat.createInfoDiv_61zpoe$f(position));
        var placeholder = Kotlin.modules['Yested'].net.yested.with_ji1yox$(new Kotlin.modules['Yested'].net.yested.Div(), _.prat.createInfoDiv_61zpoe$f_0);
        Kotlin.modules['Yested'].net.yested.ajaxGet_435vpa$(url, _.prat.createInfoDiv_61zpoe$f_1(placeholder, position));
        return placeholder;
      },
      Invite: Kotlin.createClass(null, function (_id, from, to, destinationLatLng, destinationAddress, message, status, pickupAddress) {
        this._id = _id;
        this.from = from;
        this.to = to;
        this.destinationLatLng = destinationLatLng;
        this.destinationAddress = destinationAddress;
        this.message = message;
        this.status = status;
        this.pickupAddress = pickupAddress;
      }, /** @lends _.prat.Invite.prototype */ {
        component1: function () {
          return this._id;
        },
        component2: function () {
          return this.from;
        },
        component3: function () {
          return this.to;
        },
        component4: function () {
          return this.destinationLatLng;
        },
        component5: function () {
          return this.destinationAddress;
        },
        component6: function () {
          return this.message;
        },
        component7: function () {
          return this.status;
        },
        component8: function () {
          return this.pickupAddress;
        },
        copy_in9lfv$: function (_id, from, to, destinationLatLng, destinationAddress, message, status, pickupAddress) {
          return new _.prat.Invite(_id === void 0 ? this._id : _id, from === void 0 ? this.from : from, to === void 0 ? this.to : to, destinationLatLng === void 0 ? this.destinationLatLng : destinationLatLng, destinationAddress === void 0 ? this.destinationAddress : destinationAddress, message === void 0 ? this.message : message, status === void 0 ? this.status : status, pickupAddress === void 0 ? this.pickupAddress : pickupAddress);
        },
        toString: function () {
          return 'Invite(_id=' + Kotlin.toString(this._id) + (', from=' + Kotlin.toString(this.from)) + (', to=' + Kotlin.toString(this.to)) + (', destinationLatLng=' + Kotlin.toString(this.destinationLatLng)) + (', destinationAddress=' + Kotlin.toString(this.destinationAddress)) + (', message=' + Kotlin.toString(this.message)) + (', status=' + Kotlin.toString(this.status)) + (', pickupAddress=' + Kotlin.toString(this.pickupAddress)) + ')';
        },
        hashCode: function () {
          var result = 0;
          result = result * 31 + Kotlin.hashCode(this._id) | 0;
          result = result * 31 + Kotlin.hashCode(this.from) | 0;
          result = result * 31 + Kotlin.hashCode(this.to) | 0;
          result = result * 31 + Kotlin.hashCode(this.destinationLatLng) | 0;
          result = result * 31 + Kotlin.hashCode(this.destinationAddress) | 0;
          result = result * 31 + Kotlin.hashCode(this.message) | 0;
          result = result * 31 + Kotlin.hashCode(this.status) | 0;
          result = result * 31 + Kotlin.hashCode(this.pickupAddress) | 0;
          return result;
        },
        equals_za3rmp$: function (other) {
          return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this._id, other._id) && Kotlin.equals(this.from, other.from) && Kotlin.equals(this.to, other.to) && Kotlin.equals(this.destinationLatLng, other.destinationLatLng) && Kotlin.equals(this.destinationAddress, other.destinationAddress) && Kotlin.equals(this.message, other.message) && Kotlin.equals(this.status, other.status) && Kotlin.equals(this.pickupAddress, other.pickupAddress)))));
        }
      }),
      Status: Kotlin.createEnumClass(function () {
        return [Kotlin.Enum];
      }, function $fun() {
        $fun.baseInitializer.call(this);
      }, function () {
        return {
          PENDING: new _.prat.Status(),
          ACCEPT: new _.prat.Status(),
          REJECT: new _.prat.Status(),
          CANCEL: new _.prat.Status()
        };
      }),
      User: Kotlin.createClass(null, function (firstName, lastName, phoneNumber) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.phoneNumber = phoneNumber;
      }, /** @lends _.prat.User.prototype */ {
        component1: function () {
          return this.firstName;
        },
        component2: function () {
          return this.lastName;
        },
        component3: function () {
          return this.phoneNumber;
        },
        copy_6hosri$: function (firstName, lastName, phoneNumber) {
          return new _.prat.User(firstName === void 0 ? this.firstName : firstName, lastName === void 0 ? this.lastName : lastName, phoneNumber === void 0 ? this.phoneNumber : phoneNumber);
        },
        toString: function () {
          return 'User(firstName=' + Kotlin.toString(this.firstName) + (', lastName=' + Kotlin.toString(this.lastName)) + (', phoneNumber=' + Kotlin.toString(this.phoneNumber)) + ')';
        },
        hashCode: function () {
          var result = 0;
          result = result * 31 + Kotlin.hashCode(this.firstName) | 0;
          result = result * 31 + Kotlin.hashCode(this.lastName) | 0;
          result = result * 31 + Kotlin.hashCode(this.phoneNumber) | 0;
          return result;
        },
        equals_za3rmp$: function (other) {
          return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.firstName, other.firstName) && Kotlin.equals(this.lastName, other.lastName) && Kotlin.equals(this.phoneNumber, other.phoneNumber)))));
        }
      }),
      Row: Kotlin.createClass(function () {
        return [Kotlin.modules['Yested'].net.yested.Component];
      }, function () {
        this.$element_vllmup$ = Kotlin.modules['Yested'].net.yested.createElement_61zpoe$('div');
        this.element.setAttribute('class', 'row');
      }, /** @lends _.prat.Row.prototype */ {
        element: {
          get: function () {
            return this.$element_vllmup$;
          }
        },
        col_scryt2$: function (modifiers, init) {
          Kotlin.modules['Yested'].net.yested.appendComponent_x7kbiy$(this.element, Kotlin.modules['Yested'].net.yested.with_ji1yox$(new Kotlin.modules['Yested'].net.yested.Div(), _.prat.Row.col_scryt2$f(modifiers, init)));
        }
      }, /** @lends _.prat.Row */ {
        col_scryt2$f: function (modifiers, init) {
          return function () {
            var destination = new Kotlin.ArrayList(modifiers.length);
            var tmp$0, tmp$1, tmp$2;
            tmp$0 = modifiers, tmp$1 = tmp$0.length;
            for (var tmp$2 = 0; tmp$2 !== tmp$1; ++tmp$2) {
              var item = tmp$0[tmp$2];
              destination.add_za3rmp$(item.toString());
            }
            this.clazz = Kotlin.modules['stdlib'].kotlin.collections.joinToString_sdec0h$(destination, ' ');
            init.call(this);
          };
        }
      }),
      ContainerLayout: Kotlin.createEnumClass(function () {
        return [Kotlin.Enum];
      }, function $fun(code) {
        $fun.baseInitializer.call(this);
        this.code = code;
      }, function () {
        return {
          DEFAULT: new _.prat.ContainerLayout('container'),
          FLUID: new _.prat.ContainerLayout('container-fluid')
        };
      }),
      Page: Kotlin.createClass(null, function (element, layout) {
        if (layout === void 0)
          layout = _.prat.ContainerLayout.object.DEFAULT;
        this.element = element;
        this.layout = layout;
      }, /** @lends _.prat.Page.prototype */ {
        topMenu_tx5hdt$: function (navbar) {
          Kotlin.modules['Yested'].net.yested.appendComponent_x7kbiy$(this.element, navbar);
        },
        content_6csr66$: function (init) {
          this.element.appendChild(Kotlin.modules['Yested'].net.yested.div_kb10gb$(void 0, void 0, _.prat.Page.content_6csr66$f(this, init)).element);
        },
        footer_6csr66$: function (init) {
          this.element.appendChild(Kotlin.modules['Yested'].net.yested.div_kb10gb$(void 0, void 0, _.prat.Page.footer_6csr66$f(init)).element);
        }
      }, /** @lends _.prat.Page */ {
        content_6csr66$f: function (this$Page, init) {
          return function () {
            this.rangeTo_94jgcu$('class', this$Page.layout.code);
            init.call(this);
          };
        },
        f: function () {
        },
        f_0: function (init) {
          return function () {
            this.tag_75yags$('hr', _.prat.Page.f);
            init.call(this);
          };
        },
        footer_6csr66$f: function (init) {
          return function () {
            this.div_kb10gb$(void 0, 'container', _.prat.Page.f_0(init));
          };
        }
      }),
      PageHeader: Kotlin.createClass(function () {
        return [Kotlin.modules['Yested'].net.yested.HTMLComponent];
      }, function $fun() {
        $fun.baseInitializer.call(this, 'div');
        this.clazz = 'page-header';
      }),
      pageHeader_i2197$f: function (init) {
        return function () {
          init.call(this);
        };
      },
      pageHeader_i2197$: function ($receiver, init) {
        $receiver.unaryPlus_pv6laa$(Kotlin.modules['Yested'].net.yested.with_ji1yox$(new _.prat.PageHeader(), _.prat.pageHeader_i2197$f(init)));
      },
      row_yqo6f9$f: function (init) {
        return function () {
          init.call(this);
        };
      },
      row_yqo6f9$: function ($receiver, init) {
        $receiver.unaryPlus_pv6laa$(Kotlin.modules['Yested'].net.yested.with_ji1yox$(new _.prat.Row(), _.prat.row_yqo6f9$f(init)));
      },
      page_s0l1ol$f: function (init) {
        return function () {
          init.call(this);
        };
      },
      page_s0l1ol$: function (placeholderElementId, layout, init) {
        var tmp$0;
        if (layout === void 0)
          layout = _.prat.ContainerLayout.object.DEFAULT;
        Kotlin.modules['Yested'].net.yested.with_ji1yox$(new _.prat.Page((tmp$0 = Kotlin.modules['Yested'].net.yested.el_61zpoe$(placeholderElementId)) != null ? tmp$0 : Kotlin.throwNPE(), layout), _.prat.page_s0l1ol$f(init));
      },
      Coords: Kotlin.createClass(null, function (latitude, longitude) {
        this.latitude = latitude;
        this.longitude = longitude;
      }, /** @lends _.prat.Coords.prototype */ {
        component1: function () {
          return this.latitude;
        },
        component2: function () {
          return this.longitude;
        },
        copy_puj7f4$: function (latitude, longitude) {
          return new _.prat.Coords(latitude === void 0 ? this.latitude : latitude, longitude === void 0 ? this.longitude : longitude);
        },
        toString: function () {
          return 'Coords(latitude=' + Kotlin.toString(this.latitude) + (', longitude=' + Kotlin.toString(this.longitude)) + ')';
        },
        hashCode: function () {
          var result = 0;
          result = result * 31 + Kotlin.hashCode(this.latitude) | 0;
          result = result * 31 + Kotlin.hashCode(this.longitude) | 0;
          return result;
        },
        equals_za3rmp$: function (other) {
          return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.latitude, other.latitude) && Kotlin.equals(this.longitude, other.longitude)))));
        }
      }),
      Position: Kotlin.createClass(null, function (coords) {
        this.coords = coords;
      }, /** @lends _.prat.Position.prototype */ {
        component1: function () {
          return this.coords;
        },
        copy_aqxlsn$: function (coords) {
          return new _.prat.Position(coords === void 0 ? this.coords : coords);
        },
        toString: function () {
          return 'Position(coords=' + Kotlin.toString(this.coords) + ')';
        },
        hashCode: function () {
          var result = 0;
          result = result * 31 + Kotlin.hashCode(this.coords) | 0;
          return result;
        },
        equals_za3rmp$: function (other) {
          return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && Kotlin.equals(this.coords, other.coords))));
        }
      }),
      locate_puvnrn$: function (listener) {
        navigator.geolocation.getCurrentPosition(listener);
      },
      location: function () {
        if ('geolocation' in navigator) {
          navigator.geolocation.getCurrentPosition(function (position) {
          });
        }
        if ('geolocation' in navigator) {
          console.log('geo');
        }
         else {
          console.log('NO geo');
        }
      },
      f_21: function () {
        this.unaryPlus_pdl1w0$('Summon');
      },
      main_kand9s$f: function () {
        this.brand_75yags$('#', _.prat.f_21);
      },
      main_kand9s$f_0: function () {
      },
      f_22: function (divContainer) {
        return function () {
          this.br();
          this.br();
          this.br();
          this.br();
          this.unaryPlus_pv6laa$(divContainer);
        };
      },
      f_23: function (divContainer) {
        return function () {
          this.div_kb10gb$(void 0, void 0, _.prat.f_22(divContainer));
        };
      },
      main_kand9s$f_1: function (navbar, divContainer) {
        return function () {
          this.topMenu_tx5hdt$(navbar);
          this.content_6csr66$(_.prat.f_23(divContainer));
        };
      },
      main_kand9s$: function (args) {
        var navbar = Kotlin.modules['Yested'].net.yested.with_ji1yox$(new Kotlin.modules['Yested'].net.yested.bootstrap.Navbar('appMenuBar', Kotlin.modules['Yested'].net.yested.bootstrap.NavbarPosition.object.FIXED_TOP, Kotlin.modules['Yested'].net.yested.bootstrap.NavbarLook.object.DEFAULT), _.prat.main_kand9s$f);
        var divContainer = Kotlin.modules['Yested'].net.yested.div_kb10gb$(void 0, void 0, _.prat.main_kand9s$f_0);
        divContainer.setChild_hu5ove$(new _.prat.ContentDiv(), new Kotlin.modules['Yested'].net.yested.Fade());
        _.prat.page_s0l1ol$('page', void 0, _.prat.main_kand9s$f_1(navbar, divContainer));
      },
      extractId_61zpoe$: function (str) {
        return Kotlin.modules['stdlib'].kotlin.text.isNullOrBlank_gw00vq$(str) || !Kotlin.modules['stdlib'].kotlin.text.contains_kzp0od$(str, 'id=') ? '' : Kotlin.modules['stdlib'].kotlin.text.split_l2gz7$(str, ['id=']).get_za3lpa$(1);
      },
      ContentDiv: Kotlin.createClass(function () {
        return [Kotlin.modules['Yested'].net.yested.Component];
      }, function () {
        this.$element_v18q01$ = Kotlin.modules['Yested'].net.yested.with_ji1yox$(new Kotlin.modules['Yested'].net.yested.Div(), _.prat.ContentDiv.element$f).element;
      }, /** @lends _.prat.ContentDiv.prototype */ {
        element: {
          get: function () {
            return this.$element_v18q01$;
          }
        }
      }, /** @lends _.prat.ContentDiv */ {
        f: function () {
          this.unaryPlus_pv6laa$(_.prat.createInfoDiv_61zpoe$('https://intense-waters-9652.herokuapp.com/invites/' + Kotlin.toString(_.prat.extractId_61zpoe$(window.location.href))));
        },
        f_0: function () {
          this.col_scryt2$([new Kotlin.modules['Yested'].net.yested.bootstrap.Medium(12)], _.prat.ContentDiv.f);
        },
        element$f: function () {
          _.prat.row_yqo6f9$(this, _.prat.ContentDiv.f_0);
        }
      }),
      pushResult: Kotlin.createClass(null, function (result) {
        this.result = result;
      }, /** @lends _.prat.pushResult.prototype */ {
        component1: function () {
          return this.result;
        },
        copy_6taknv$: function (result) {
          return new _.prat.pushResult(result === void 0 ? this.result : result);
        },
        toString: function () {
          return 'pushResult(result=' + Kotlin.toString(this.result) + ')';
        },
        hashCode: function () {
          var result = 0;
          result = result * 31 + Kotlin.hashCode(this.result) | 0;
          return result;
        },
        equals_za3rmp$: function (other) {
          return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && Kotlin.equals(this.result, other.result))));
        }
      }),
      SpinnerOptions: Kotlin.createClass(null, function (lines, length, width, radius, corners, rotate, direction, color, speed, trail, shadow, hwaccel, className, zIndex, top, left, scale) {
        if (lines === void 0)
          lines = 13;
        if (length === void 0)
          length = 20;
        if (width === void 0)
          width = 10;
        if (radius === void 0)
          radius = 30;
        if (corners === void 0)
          corners = 1;
        if (rotate === void 0)
          rotate = 0;
        if (direction === void 0)
          direction = 1;
        if (color === void 0)
          color = '#000';
        if (speed === void 0)
          speed = 1;
        if (trail === void 0)
          trail = 60;
        if (shadow === void 0)
          shadow = false;
        if (hwaccel === void 0)
          hwaccel = false;
        if (className === void 0)
          className = 'spinner';
        if (zIndex === void 0)
          zIndex = 2.0E9;
        if (top === void 0)
          top = '50%';
        if (left === void 0)
          left = '50%';
        if (scale === void 0)
          scale = 1.0;
        this.lines = lines;
        this.length = length;
        this.width = width;
        this.radius = radius;
        this.corners = corners;
        this.rotate = rotate;
        this.direction = direction;
        this.color = color;
        this.speed = speed;
        this.trail = trail;
        this.shadow = shadow;
        this.hwaccel = hwaccel;
        this.className = className;
        this.zIndex = zIndex;
        this.top = top;
        this.left = left;
        this.scale = scale;
      }, /** @lends _.prat.SpinnerOptions.prototype */ {
        component1: function () {
          return this.lines;
        },
        component2: function () {
          return this.length;
        },
        component3: function () {
          return this.width;
        },
        component4: function () {
          return this.radius;
        },
        component5: function () {
          return this.corners;
        },
        component6: function () {
          return this.rotate;
        },
        component7: function () {
          return this.direction;
        },
        component8: function () {
          return this.color;
        },
        component9: function () {
          return this.speed;
        },
        component10: function () {
          return this.trail;
        },
        component11: function () {
          return this.shadow;
        },
        component12: function () {
          return this.hwaccel;
        },
        component13: function () {
          return this.className;
        },
        component14: function () {
          return this.zIndex;
        },
        component15: function () {
          return this.top;
        },
        component16: function () {
          return this.left;
        },
        component17: function () {
          return this.scale;
        },
        copy_o0viu7$: function (lines, length, width, radius, corners, rotate, direction, color, speed, trail, shadow, hwaccel, className, zIndex, top, left, scale) {
          return new _.prat.SpinnerOptions(lines === void 0 ? this.lines : lines, length === void 0 ? this.length : length, width === void 0 ? this.width : width, radius === void 0 ? this.radius : radius, corners === void 0 ? this.corners : corners, rotate === void 0 ? this.rotate : rotate, direction === void 0 ? this.direction : direction, color === void 0 ? this.color : color, speed === void 0 ? this.speed : speed, trail === void 0 ? this.trail : trail, shadow === void 0 ? this.shadow : shadow, hwaccel === void 0 ? this.hwaccel : hwaccel, className === void 0 ? this.className : className, zIndex === void 0 ? this.zIndex : zIndex, top === void 0 ? this.top : top, left === void 0 ? this.left : left, scale === void 0 ? this.scale : scale);
        },
        toString: function () {
          return 'SpinnerOptions(lines=' + Kotlin.toString(this.lines) + (', length=' + Kotlin.toString(this.length)) + (', width=' + Kotlin.toString(this.width)) + (', radius=' + Kotlin.toString(this.radius)) + (', corners=' + Kotlin.toString(this.corners)) + (', rotate=' + Kotlin.toString(this.rotate)) + (', direction=' + Kotlin.toString(this.direction)) + (', color=' + Kotlin.toString(this.color)) + (', speed=' + Kotlin.toString(this.speed)) + (', trail=' + Kotlin.toString(this.trail)) + (', shadow=' + Kotlin.toString(this.shadow)) + (', hwaccel=' + Kotlin.toString(this.hwaccel)) + (', className=' + Kotlin.toString(this.className)) + (', zIndex=' + Kotlin.toString(this.zIndex)) + (', top=' + Kotlin.toString(this.top)) + (', left=' + Kotlin.toString(this.left)) + (', scale=' + Kotlin.toString(this.scale)) + ')';
        },
        hashCode: function () {
          var result = 0;
          result = result * 31 + Kotlin.hashCode(this.lines) | 0;
          result = result * 31 + Kotlin.hashCode(this.length) | 0;
          result = result * 31 + Kotlin.hashCode(this.width) | 0;
          result = result * 31 + Kotlin.hashCode(this.radius) | 0;
          result = result * 31 + Kotlin.hashCode(this.corners) | 0;
          result = result * 31 + Kotlin.hashCode(this.rotate) | 0;
          result = result * 31 + Kotlin.hashCode(this.direction) | 0;
          result = result * 31 + Kotlin.hashCode(this.color) | 0;
          result = result * 31 + Kotlin.hashCode(this.speed) | 0;
          result = result * 31 + Kotlin.hashCode(this.trail) | 0;
          result = result * 31 + Kotlin.hashCode(this.shadow) | 0;
          result = result * 31 + Kotlin.hashCode(this.hwaccel) | 0;
          result = result * 31 + Kotlin.hashCode(this.className) | 0;
          result = result * 31 + Kotlin.hashCode(this.zIndex) | 0;
          result = result * 31 + Kotlin.hashCode(this.top) | 0;
          result = result * 31 + Kotlin.hashCode(this.left) | 0;
          result = result * 31 + Kotlin.hashCode(this.scale) | 0;
          return result;
        },
        equals_za3rmp$: function (other) {
          return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.lines, other.lines) && Kotlin.equals(this.length, other.length) && Kotlin.equals(this.width, other.width) && Kotlin.equals(this.radius, other.radius) && Kotlin.equals(this.corners, other.corners) && Kotlin.equals(this.rotate, other.rotate) && Kotlin.equals(this.direction, other.direction) && Kotlin.equals(this.color, other.color) && Kotlin.equals(this.speed, other.speed) && Kotlin.equals(this.trail, other.trail) && Kotlin.equals(this.shadow, other.shadow) && Kotlin.equals(this.hwaccel, other.hwaccel) && Kotlin.equals(this.className, other.className) && Kotlin.equals(this.zIndex, other.zIndex) && Kotlin.equals(this.top, other.top) && Kotlin.equals(this.left, other.left) && Kotlin.equals(this.scale, other.scale)))));
        }
      }),
      Spinner: Kotlin.createClass(function () {
        return [Kotlin.modules['Yested'].net.yested.Component];
      }, function (options) {
        if (options === void 0)
          options = new _.prat.SpinnerOptions();
        this.options = options;
        this.jsSpinnerElement_jh69bu$ = new Spinner(this.createOptions()).spin().el;
        this.$element_ghs15a$ = this.jsSpinnerElement_jh69bu$;
      }, /** @lends _.prat.Spinner.prototype */ {
        createOptions: function () {
          return _.prat.Spinner.createOptions$f(this);
        },
        element: {
          get: function () {
            return this.$element_ghs15a$;
          }
        }
      }, /** @lends _.prat.Spinner */ {
        createOptions$f: function (this$Spinner) {
          return Kotlin.createObject(null, function () {
            this.lines = this$Spinner.options.lines;
            this.length = this$Spinner.options.length;
            this.width = this$Spinner.options.width;
            this.radius = this$Spinner.options.radius;
            this.corners = this$Spinner.options.corners;
            this.rotate = this$Spinner.options.rotate;
            this.direction = this$Spinner.options.direction;
            this.color = this$Spinner.options.color;
            this.speed = this$Spinner.options.speed;
            this.trail = this$Spinner.options.trail;
            this.shadow = this$Spinner.options.shadow;
            this.hwaccel = this$Spinner.options.hwaccel;
            this.className = this$Spinner.options.className;
            this.zIndex = this$Spinner.options.zIndex;
            this.top = this$Spinner.options.top;
            this.left = this$Spinner.options.left;
            this.scale = this$Spinner.options.scale;
          });
        }
      }),
      spinner_4wh9n3$: function ($receiver, options) {
        if (options === void 0)
          options = new _.prat.SpinnerOptions();
        $receiver.unaryPlus_pv6laa$(new _.prat.Spinner(options));
      }
    })
  });
  Kotlin.defineModule('invite-app', _);
  _.prat.main_kand9s$([]);
}(Kotlin));
