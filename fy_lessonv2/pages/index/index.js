var a = getApp();

Page({
    data: {
        setting: [],
        shareinfo: [],
        avatar: "",
        url: "",
        show_app: 1,
        show_btn: !1,
        real_url: ""
    },
    onLoad: function(a) {
        var t = this;
  
        a.real_url && t.setData({
            real_url: decodeURIComponent(a.real_url)
        }), setTimeout(function() {
            t.load_shareinfo(), t.load_index();
        });
    },
    load_index: function() {
        var t = this;
        a.util.request({
            url: "entry/wxapp/index",
            success: function(a) {
              console.log(a);
                t.setData({
                    url: a.data.data
                });
            }
        });
    },
    load_shareinfo: function() {
        var t = this;
        a.util.request({
            url: "entry/wxapp/shareinfo",
            success: function(a) {
                if (t.setData({
                    setting: a.data.data.setting,
                    shareinfo: a.data.data.shareinfo,
                    avatar: a.data.data.avatar
                }), a.data.data.sharewxapp) wx.navigateTo({
                    url: "../newlesson/index"
                }); 
                // else {
                //     if (wx.getStorageSync("userInfo")) return t.setData({
                //         show_app: !0
                //     }), !1;
                //     t.setData({
                //         show_btn: !0
                //     });
                // }
                // wx.setNavigationBarTitle({
                //     title: "微信授权"
                // });
            }
        });
    },
    onShareAppMessage: function(a) {
        var t = this;
        return {
            title: t.data.shareinfo.title,
            path: "/fy_lessonv2/pages/index/index?real_url=" + encodeURIComponent(a.webViewUrl),
            imageUrl: t.data.shareinfo.images,
            success: function(a) {
                wx.showToast({
                    title: "分享成功",
                    icon: "success",
                    duration: 2e3
                });
            },
            fail: function(a) {}
        };
    },
    updateUserInfo: function(t) {
        var e = this;
        a.util.getUserInfo(function(a) {
            a.memberInfo && e.load_shareinfo(), e.setData({
                show_app: !0
            });
        }, t.detail);
    }
});