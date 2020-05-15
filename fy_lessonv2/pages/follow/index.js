var t = getApp();

Page({
    data: {
        attachurl: "",
        qrcode: "",
        lesson_follow_title: ""
    },
    onLoad: function() {
        var t = this;
        setTimeout(function() {
            t.load_shareinfo();
        }), wx.setNavigationBarTitle({
            title: "关注公众号"
        });
    },
    load_shareinfo: function() {
        var a = this;
        t.util.request({
            url: "entry/wxapp/shareinfo",
            data: {},
            success: function(t) {
                a.setData({
                    attachurl: t.data.data.attachurl,
                    qrcode: t.data.data.setting.qrcode,
                    lesson_follow_title: t.data.data.setting.lesson_follow_title
                });
            }
        });
    }
});