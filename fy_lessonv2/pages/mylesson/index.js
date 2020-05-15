var t = getApp();

Page({
    data: {
        url: ""
    },
    onLoad: function() {
        var t = this;
        setTimeout(function() {
            t.load_mylesson();
        });
    },
    load_mylesson: function() {
        var a = this;
        t.util.request({
            url: "entry/wxapp/mylesson",
            success: function(t) {
                a.setData({
                    url: t.data.data
                });
            }
        });
    }
});