var a = getApp();

Page({
    data: {
        orderid: "",
        title: ""
    },
    onLoad: function(t) {
        var e = this;
        a.util.footer(e), e.setData({
            orderid: t.orderid,
            title: t.title
        }), setTimeout(function() {
            e.go_payment();
        });
    },
    go_payment: function() {
        var t = this;
        a.util.request({
            url: "entry/wxapp/pay",
            data: {
                m: "fy_lessonv2",
                orderid: t.data.orderid,
                title: t.data.title
            },
            success: function(a) {
                a.data && a.data.data && !a.data.errno && wx.requestPayment({
                    timeStamp: a.data.data.timeStamp,
                    nonceStr: a.data.data.nonceStr,
                    package: a.data.data.package,
                    signType: "MD5",
                    paySign: a.data.data.paySign,
                    success: function(t) {
                        if (1 == a.data.data.order_type) e = "../../../fy_lessonv2/pages/vip/index"; else var e = "../../../fy_lessonv2/pages/mylesson/index";
                        wx.showToast({
                            title: "支付成功",
                            icon: "success",
                            duration: 2e3,
                            success: function() {
                                setTimeout(function() {
                                    wx.navigateTo({
                                        url: e
                                    });
                                }, 2e3);
                            }
                        });
                    },
                    fail: function(a) {
                        t.go_index();
                    }
                });
            },
            fail: function(a) {
                wx.showModal({
                    title: "系统提示",
                    content: a.data.message.message ? a.data.message.message : "错误",
                    showCancel: !1,
                    success: function(a) {
                        a.confirm && t.go_index();
                    }
                });
            }
        });
    },
    go_index: function() {
        wx.navigateTo({
            url: "../../../fy_lessonv2/pages/index/index"
        });
    }
});