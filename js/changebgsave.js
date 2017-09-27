/**
 * Created by zhao on 2017/9/6.
 */
$.ajax({
    url:"/watchpointController/getUserConfigureBeanByKey.do",
    type: "post",
    data: {userId:0},
    dataType:"json",
    success: function (data) {
        switch(data){
            case 1:
                $("body").attr("id","skin-blur-blue");
                break;
            case 2:
                $("body").attr("id","skin-blur-violate");
                break;
            case 3:
                $("body").attr("id","skin-blur-lights");
                break;
            case 4:
                $("body").attr("id","skin-blur-greenish");
                break;
            case 5:
                $("body").attr("id","skin-blur-night");
                break;
            case 6:
                $("body").attr("id","skin-blur-ocean");
                break;
            case 7:
                $("body").attr("id","skin-blur-sunset");
                break;
            case 8:
                $("body").attr("id","skin-blur-kiwi");
                break;
            default:
                $("body").attr("id","skin-blur-blue");
                break;
        }
    }
});