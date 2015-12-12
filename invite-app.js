(function (Kotlin) {
  'use strict';
  var _ = Kotlin.defineRootPackage(null, /** @lends _ */ {
    prat: Kotlin.definePackage(null, /** @lends _.prat */ {
      Invite: Kotlin.createClass(null, function (from, to, destinationLatLng, destinationAddress, message, status, originLatLng) {
        this.from = from;
        this.to = to;
        this.destinationLatLng = destinationLatLng;
        this.destinationAddress = destinationAddress;
        this.message = message;
        this.status = status;
        this.originLatLng = originLatLng;
      }, /** @lends _.prat.Invite.prototype */ {
        component1: function () {
          return this.from;
        },
        component2: function () {
          return this.to;
        },
        component3: function () {
          return this.destinationLatLng;
        },
        component4: function () {
          return this.destinationAddress;
        },
        component5: function () {
          return this.message;
        },
        component6: function () {
          return this.status;
        },
        component7: function () {
          return this.originLatLng;
        },
        copy_hal06b$: function (from, to, destinationLatLng, destinationAddress, message, status, originLatLng) {
          return new _.prat.Invite(from === void 0 ? this.from : from, to === void 0 ? this.to : to, destinationLatLng === void 0 ? this.destinationLatLng : destinationLatLng, destinationAddress === void 0 ? this.destinationAddress : destinationAddress, message === void 0 ? this.message : message, status === void 0 ? this.status : status, originLatLng === void 0 ? this.originLatLng : originLatLng);
        },
        toString: function () {
          return 'Invite(from=' + Kotlin.toString(this.from) + (', to=' + Kotlin.toString(this.to)) + (', destinationLatLng=' + Kotlin.toString(this.destinationLatLng)) + (', destinationAddress=' + Kotlin.toString(this.destinationAddress)) + (', message=' + Kotlin.toString(this.message)) + (', status=' + Kotlin.toString(this.status)) + (', originLatLng=' + Kotlin.toString(this.originLatLng)) + ')';
        },
        hashCode: function () {
          var result = 0;
          result = result * 31 + Kotlin.hashCode(this.from) | 0;
          result = result * 31 + Kotlin.hashCode(this.to) | 0;
          result = result * 31 + Kotlin.hashCode(this.destinationLatLng) | 0;
          result = result * 31 + Kotlin.hashCode(this.destinationAddress) | 0;
          result = result * 31 + Kotlin.hashCode(this.message) | 0;
          result = result * 31 + Kotlin.hashCode(this.status) | 0;
          result = result * 31 + Kotlin.hashCode(this.originLatLng) | 0;
          return result;
        },
        equals_za3rmp$: function (other) {
          return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.from, other.from) && Kotlin.equals(this.to, other.to) && Kotlin.equals(this.destinationLatLng, other.destinationLatLng) && Kotlin.equals(this.destinationAddress, other.destinationAddress) && Kotlin.equals(this.message, other.message) && Kotlin.equals(this.status, other.status) && Kotlin.equals(this.originLatLng, other.originLatLng)))));
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
            this.clazz = Kotlin.modules['stdlib'].kotlin.joinToString_aw7tsx$(destination, ' ');
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
      f: function () {
        this.unaryPlus_pdl1w0$('Summon');
      },
      main_kand9s$f: function () {
        this.brand_75yags$('#', _.prat.f);
      },
      main_kand9s$f_0: function () {
      },
      f_0: function (divContainer) {
        return function () {
          this.br();
          this.br();
          this.br();
          this.br();
          this.unaryPlus_pv6laa$(divContainer);
        };
      },
      f_1: function (divContainer) {
        return function () {
          this.div_kb10gb$(void 0, void 0, _.prat.f_0(divContainer));
        };
      },
      main_kand9s$f_1: function (navbar, divContainer) {
        return function () {
          this.topMenu_tx5hdt$(navbar);
          this.content_6csr66$(_.prat.f_1(divContainer));
        };
      },
      main_kand9s$: function (args) {
        var navbar = Kotlin.modules['Yested'].net.yested.with_ji1yox$(new Kotlin.modules['Yested'].net.yested.bootstrap.Navbar('appMenuBar', Kotlin.modules['Yested'].net.yested.bootstrap.NavbarPosition.object.FIXED_TOP, Kotlin.modules['Yested'].net.yested.bootstrap.NavbarLook.object.DEFAULT), _.prat.main_kand9s$f);
        var divContainer = Kotlin.modules['Yested'].net.yested.div_kb10gb$(void 0, void 0, _.prat.main_kand9s$f_0);
        divContainer.setChild_hu5ove$(new _.prat.ContentDiv(), new Kotlin.modules['Yested'].net.yested.Fade());
        _.prat.page_s0l1ol$('page', void 0, _.prat.main_kand9s$f_1(navbar, divContainer));
      },
      ContentDiv: Kotlin.createClass(function () {
        return [Kotlin.modules['Yested'].net.yested.Component];
      }, function () {
        this.$element_v18q01$ = Kotlin.modules['Yested'].net.yested.with_ji1yox$(new Kotlin.modules['Yested'].net.yested.Div(), _.prat.ContentDiv.element$f(this)).element;
      }, /** @lends _.prat.ContentDiv.prototype */ {
        extractId_61zpoe$: function (str) {
          return Kotlin.modules['stdlib'].kotlin.isNullOrBlank_pdl1w0$(str) || !Kotlin.modules['stdlib'].kotlin.contains_gnw9n7$(str, 'id=') ? '' : Kotlin.modules['stdlib'].kotlin.split_6nia1l$(str, ['id=']).get_za3lpa$(1);
        },
        element: {
          get: function () {
            return this.$element_v18q01$;
          }
        }
      }, /** @lends _.prat.ContentDiv */ {
        f: function (this$ContentDiv) {
          return function () {
            this.unaryPlus_pv6laa$(_.prat.createInfoDiv_61zpoe$('http://localhost:8080/invites/' + Kotlin.toString(this$ContentDiv.extractId_61zpoe$(window.location.href))));
          };
        },
        f_0: function (this$ContentDiv) {
          return function () {
            this.col_scryt2$([new Kotlin.modules['Yested'].net.yested.bootstrap.Medium(12)], _.prat.ContentDiv.f(this$ContentDiv));
          };
        },
        element$f: function (this$ContentDiv) {
          return function () {
            _.prat.row_yqo6f9$(this, _.prat.ContentDiv.f_0(this$ContentDiv));
          };
        }
      }),
      f_2: function () {
        this.unaryPlus_pdl1w0$('Fetching message...');
      },
      f_3: function () {
        this.br();
        this.br();
        this.br();
        this.br();
        this.br();
        this.br();
        this.br();
        _.prat.spinner_4wh9n3$(this, new _.prat.SpinnerOptions(void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, 0.25));
        Kotlin.modules['Yested'].net.yested.bootstrap.aligned_3834vs$(this, Kotlin.modules['Yested'].net.yested.bootstrap.TextAlign.object.CENTER, _.prat.f_2);
      },
      createInfoDiv_61zpoe$f: function () {
        this.div_kb10gb$(void 0, void 0, _.prat.f_3);
      },
      f_4: function (it) {
        return function () {
          this.unaryPlus_pdl1w0$(it.from.firstName + "'d like to send you a free ride.");
        };
      },
      f_5: function (it) {
        return function () {
          Kotlin.modules['Yested'].net.yested.bootstrap.aligned_3834vs$(this, Kotlin.modules['Yested'].net.yested.bootstrap.TextAlign.object.CENTER, _.prat.f_4(it));
        };
      },
      f_6: function (it) {
        return function () {
          this.col_scryt2$([new Kotlin.modules['Yested'].net.yested.bootstrap.Medium(12)], _.prat.f_5(it));
        };
      },
      f_7: function (it) {
        return function () {
          this.unaryPlus_pdl1w0$(it.message);
        };
      },
      f_8: function (it) {
        return function () {
          Kotlin.modules['Yested'].net.yested.bootstrap.aligned_3834vs$(this, Kotlin.modules['Yested'].net.yested.bootstrap.TextAlign.object.CENTER, _.prat.f_7(it));
        };
      },
      f_9: function (it, this$) {
        return function () {
          this$.h4_6csr66$(_.prat.f_8(it));
        };
      },
      f_10: function (it) {
        return function () {
          this.unaryPlus_pdl1w0$('Destination: ' + it.destinationAddress);
        };
      },
      f_11: function (it, this$) {
        return function () {
          Kotlin.modules['Yested'].net.yested.bootstrap.aligned_3834vs$(this$, Kotlin.modules['Yested'].net.yested.bootstrap.TextAlign.object.CENTER, _.prat.f_10(it));
        };
      },
      f_12: function () {
        this.unaryPlus_pdl1w0$('Reject');
      },
      f_13: function (it) {
        Kotlin.println('First Button pressed.');
      },
      f_14: function () {
        this.unaryPlus_pdl1w0$('Accept');
      },
      f_15: function (it) {
        Kotlin.println('Second Button pressed.');
      },
      f_16: function () {
        Kotlin.modules['Yested'].net.yested.bootstrap.btsButton_ghocd8$(this, Kotlin.modules['Yested'].net.yested.ButtonType.object.BUTTON, _.prat.f_12, void 0, void 0, void 0, void 0, _.prat.f_13);
        this.nbsp_za3lpa$();
        Kotlin.modules['Yested'].net.yested.bootstrap.btsButton_ghocd8$(this, Kotlin.modules['Yested'].net.yested.ButtonType.object.BUTTON, _.prat.f_14, Kotlin.modules['Yested'].net.yested.bootstrap.ButtonLook.object.SUCCESS, void 0, void 0, void 0, _.prat.f_15);
      },
      f_17: function () {
        this.unaryPlus_pv6laa$(this.div_kb10gb$(void 0, void 0, _.prat.f_16));
      },
      f_18: function (this$) {
        return function () {
          Kotlin.modules['Yested'].net.yested.bootstrap.aligned_3834vs$(this$, Kotlin.modules['Yested'].net.yested.bootstrap.TextAlign.object.CENTER, _.prat.f_17);
        };
      },
      f_19: function (it) {
        return function () {
          _.prat.row_yqo6f9$(this, _.prat.f_6(it));
          this.br();
          _.prat.row_yqo6f9$(this, _.prat.f_9(it, this));
          this.br();
          _.prat.row_yqo6f9$(this, _.prat.f_11(it, this));
          _.prat.row_yqo6f9$(this, _.prat.f_18(this));
        };
      },
      createInfoDiv_61zpoe$f_0: function (placeholder) {
        return function (it) {
          placeholder.setChild_5f0h2k$(Kotlin.modules['Yested'].net.yested.with_ji1yox$(new Kotlin.modules['Yested'].net.yested.Div(), _.prat.f_19(it)));
        };
      },
      createInfoDiv_61zpoe$: function (url) {
        var placeholder = Kotlin.modules['Yested'].net.yested.with_ji1yox$(new Kotlin.modules['Yested'].net.yested.Div(), _.prat.createInfoDiv_61zpoe$f);
        Kotlin.modules['Yested'].net.yested.ajaxGet_435vpa$(url, _.prat.createInfoDiv_61zpoe$f_0(placeholder));
        return placeholder;
      },
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
