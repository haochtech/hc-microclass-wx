var t = getApp();

Page({
    data: {
        banner_list: [],
        setting: [],
        swiper: {
            indicatorDots: !0,
            autoplay: !0,
            interval: 5e3,
            duration: 1e3,
            indicatorColor: "rgba(214, 214, 214, .6)",
            indicatorActiveColor: "rgba(0, 0, 0, .4)"
        }
    },
    onLoad: function() {
        var t = this;
        setTimeout(function() {
            t.load_banners(), t.load_setting(), t.load_newlesson();
        });
    },
    load_index: function() {
        var a = this;
        t.util.request({
            url: "entry/wxapp/index",
            success: function(t) {
                a.setData({
                    url: t.data.data
                });
            }
        });
    },
    load_shareinfo: function() {
        var a = this;
        t.util.request({
            url: "entry/wxapp/shareinfo",
            success: function(t) {
                a.setData({
                    shareinfo: t.data.data.shareinfo,
                    sharewxapp: t.data.data.sharewxapp
                });
            }
        });
    },
    load_banners: function() {
        var a = this;
        t.util.request({
            url: "entry/wxapp/banner",
            success: function(t) {
                a.setData({
                    banner_list: t.data.data
                });
            }
        });
    },
    load_setting: function() {
        var a = this;
        t.util.request({
            url: "entry/wxapp/setting",
            success: function(t) {
                a.setData({
                    setting: t.data.data.setting
                }), wx.setNavigationBarTitle({
                    title: t.data.data.setting.sitename ? t.data.data.setting.sitename : ""
                });
            }
        });
    },
    load_newlesson: function() {
        var a = this;
        t.util.request({
            url: "entry/wxapp/freelesson",
            success: function(t) {
                a.setData({
                    lesson: t.data.data.lesson
                });
            }
        });
    }
});