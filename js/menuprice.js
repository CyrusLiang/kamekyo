/*
 * Displays menu prices
 * Mark as sold out
 ** "Sold out";//
 */
$(document).ready(function(){
    // Appetizers
    document.getElementById("gyoza").innerHTML = "$9.50";
    document.getElementById("eggp").innerHTML = "$11.50";
    document.getElementById("misoyaki").innerHTML = "$18";
    document.getElementById("bnegi").innerHTML = "$17";
    document.getElementById("hkama").innerHTML = "$15.50";
    document.getElementById("ckushi").innerHTML = "$14";
    document.getElementById("karaage").innerHTML = "$11";
    document.getElementById("svtempura").innerHTML = "$14.50";
    document.getElementById("stempura").innerHTML = "$12.50";
    document.getElementById("vtempura").innerHTML = "$11";
    document.getElementById("sscrab").innerHTML = "$14";
    document.getElementById("korokke").innerHTML = "$9.50";
    document.getElementById("kakifry").innerHTML = "$12.50";
    document.getElementById("atofu").innerHTML = "$11";
    document.getElementById("ktofu").innerHTML = "$11.50";
    document.getElementById("htofu").innerHTML = "$10";

    // Salads
    document.getElementById("gomaae").innerHTML = "$10.50";
    document.getElementById("ohitashi").innerHTML = "$10.50";
    document.getElementById("tsukemono").innerHTML = "$9";
    document.getElementById("poke").innerHTML = "$17.50";
    document.getElementById("sunomono").innerHTML = "$12";
    document.getElementById("houses").innerHTML = "$11.50";
    document.getElementById("seaweed").innerHTML = "$10";
    document.getElementById("sobas").innerHTML = "$12";
    document.getElementById("bean").innerHTML = "$10";
    document.getElementById("cucumber").innerHTML = "$10.50";

    // Sides
    document.getElementById("miso").innerHTML = "$4";
    document.getElementById("asari").innerHTML = "$9.50";
    document.getElementById("eda").innerHTML = "$8";
    document.getElementById("rice").innerHTML = "$3.50";
    document.getElementById("srice").innerHTML = "$4";

    // Entrees
    document.getElementById("salteri").innerHTML = "$25";
    document.getElementById("sabteri").innerHTML = "$21";
    document.getElementById("chiteri").innerHTML = "$23";
    document.getElementById("beefteri").innerHTML = "$29.50";
    document.getElementById("svteri").innerHTML = "$29.50";
    document.getElementById("tonkatsu").innerHTML = "$23";
    document.getElementById("chikatsu").innerHTML = "$23";
    document.getElementById("gpork").innerHTML = "$23";
    document.getElementById("gsnap").innerHTML = "$23";
    document.getElementById("misoyakie").innerHTML = "$29.50";
    document.getElementById("sizzveg").innerHTML = "$19.50";
    document.getElementById("svtempe").innerHTML = "$27";
    document.getElementById("stempe").innerHTML = "$25";
    document.getElementById("vtempe").innerHTML = "$21";
    document.getElementById("kakifrye").innerHTML = "$23";
    document.getElementById("unagid").innerHTML = "$27";
    document.getElementById("terid").innerHTML = "$20.50";
    document.getElementById("tempd").innerHTML = "$19.50";
    document.getElementById("oyako").innerHTML = "$19";
    document.getElementById("tonkatsud").innerHTML = "$20.50";

    // Kitchen Specials
    document.getElementById("skushi").innerHTML = "$28";
    document.getElementById("yosen").innerHTML = "$29";
    document.getElementById("suki").innerHTML = "$31";
    document.getElementById("sesame").innerHTML = "$24";
    document.getElementById("kclay").innerHTML = "$29";

    // Noodles
    document.getElementById("chicku").innerHTML = "$19";
    document.getElementById("beefu").innerHTML = "$20";
    document.getElementById("kameu").innerHTML = "$18.50";
    document.getElementById("seafu").innerHTML = "$25";
    document.getElementById("svtempu").innerHTML = "$21";
    document.getElementById("stempu").innerHTML = "$20";
    document.getElementById("vtempu").innerHTML = "$20";
    document.getElementById("vegu").innerHTML = "$16.50";
    document.getElementById("kitsune").innerHTML = "$18";
    document.getElementById("nabe").innerHTML = "$28";
    document.getElementById("yasai").innerHTML = "$18";
    document.getElementById("zaru").innerHTML = "$18";
    document.getElementById("tzsoba").innerHTML = "$22.50";
    document.getElementById("pudon").innerHTML = "$9";
    document.getElementById("psoba").innerHTML = "$10";

    // Sushibar Specials
    document.getElementById("hsroll").innerHTML = "$21";
    document.getElementById("strain").innerHTML = "$21";
    document.getElementById("harain").innerHTML = "$21";
    document.getElementById("kdrag").innerHTML = "$21";
    document.getElementById("dyna").innerHTML = "$16";
    document.getElementById("niners").innerHTML = "$20";
    document.getElementById("tekkad").innerHTML = "$30";
    document.getElementById("chirashi").innerHTML = "$30";
    document.getElementById("sushim").innerHTML = "$30";
    document.getElementById("sscombo").innerHTML = "$55";

    // Sashimi
    document.getElementById("maguros").innerHTML = "$18";
    document.getElementById("magurol").innerHTML = "$33";
    document.getElementById("hamachis").innerHTML = "$18";
    document.getElementById("hamachil").innerHTML = "$33";
    document.getElementById("sakes").innerHTML = "$17.50";
    document.getElementById("sakel").innerHTML = "$32";
    document.getElementById("albacores").innerHTML = "$17.50";
    document.getElementById("albacorel").innerHTML = "$32";
    document.getElementById("ankimos").innerHTML = "$18";
    document.getElementById("ankimol").innerHTML = "$33";
    document.getElementById("sashimis").innerHTML = "$23.50";
    document.getElementById("sashimim").innerHTML = "$35";
    document.getElementById("sashimil").innerHTML = "$47";

    // Nigiri
    document.getElementById("maguro").innerHTML = "$8";
    document.getElementById("hamachi").innerHTML = "$8";
    document.getElementById("sake").innerHTML = "$7.50";
    document.getElementById("unagi").innerHTML = "$7.50";
    document.getElementById("aji").innerHTML = "$8";
    document.getElementById("amaebi").innerHTML = "$11";
    document.getElementById("anago").innerHTML = "$7.50";
    document.getElementById("ebi").innerHTML = "$7.50";
    document.getElementById("hirame").innerHTML = "$7.50";
    document.getElementById("kanpachi").innerHTML = "$8";
    document.getElementById("hotate").innerHTML = "$7.50";
    document.getElementById("ika").innerHTML = "$7";
    document.getElementById("ikura").innerHTML = "$7.50";
    document.getElementById("kani").innerHTML = "$8";
    document.getElementById("katsuo").innerHTML = "$7.50";
    document.getElementById("mirugai").innerHTML = "$12.50";
    document.getElementById("saba").innerHTML = "$7.50";
    document.getElementById("shiro").innerHTML = "$7.50";
    document.getElementById("tai").innerHTML = "$7.50";
    document.getElementById("tako").innerHTML = "$7.50";
    document.getElementById("tobiko").innerHTML = "$7";
    document.getElementById("tamago").innerHTML = "$6";
    document.getElementById("uni").innerHTML = "$14.50";
    document.getElementById("shotate").innerHTML = "$7.50";
    document.getElementById("ankimo").innerHTML = "$7.50";
    document.getElementById("toro").innerHTML = "$17.50";
    document.getElementById("bigeye").innerHTML = "$9";
    document.getElementById("king").innerHTML = "$9";
    document.getElementById("sbelly").innerHTML = "$8.50";
    document.getElementById("abelly").innerHTML = "$8.50";

    // Maki
    document.getElementById("negitoro").innerHTML = "$17.50";
    document.getElementById("alaska").innerHTML = "$8.50";
    document.getElementById("avocado").innerHTML = "$7.50";
    document.getElementById("avokyu").innerHTML = "$8.50";
    document.getElementById("cali").innerHTML = "$10";
    document.getElementById("futom").innerHTML = "$11";
    document.getElementById("garisaba").innerHTML = "$8.50";
    document.getElementById("gobo").innerHTML = "$7.50";
    document.getElementById("horenso").innerHTML = "$7.50";
    //document.getElementById("kanpyo").innerHTML = "$6.75";
    document.getElementById("kappa").innerHTML = "$7.50";
    document.getElementById("natto").innerHTML = "$7.50";
    document.getElementById("newyork").innerHTML = "$8.50";
    document.getElementById("negihama").innerHTML = "$8.50";
    document.getElementById("oshinko").innerHTML = "$7.50";
    document.getElementById("philly").innerHTML = "$9.50";
    document.getElementById("rocknroll").innerHTML = "$9.25";
    document.getElementById("sakem").innerHTML = "$8.50";
    document.getElementById("sskin").innerHTML = "$9.25";
    document.getElementById("stroll").innerHTML = "$9.50";
    document.getElementById("shiitake").innerHTML = "$9";
    document.getElementById("stuna").innerHTML = "$9.50";
    document.getElementById("shama").innerHTML = "$9.50";
    document.getElementById("spider").innerHTML = "$15";
    document.getElementById("tekka").innerHTML = "$8.50";
    document.getElementById("tunad").innerHTML = "$9.50";
    document.getElementById("hamachid").innerHTML = "$9.50";
    document.getElementById("vegd").innerHTML = "$8.50";
    document.getElementById("unakyu").innerHTML = "$9.25";
    document.getElementById("vtroll").innerHTML = "$8.50";
    document.getElementById("umeshiso").innerHTML = "$7.50";
    document.getElementById("lobster").innerHTML = "$10";

    // Beverages
    document.getElementById("sanpell").innerHTML = "$4.50";
    document.getElementById("kerns").innerHTML = "$4.50";
    document.getElementById("ramune").innerHTML = "$4.50";
    document.getElementById("calpico").innerHTML = "$4.50";
    document.getElementById("soda").innerHTML = "$3.50";
    document.getElementById("icedt").innerHTML = "$4.50";
    document.getElementById("thait").innerHTML = "$5";
    document.getElementById("mangofloat").innerHTML = "$7.50";

    // Desserts
    document.getElementById("icecream").innerHTML = "$8";
    document.getElementById("friedb").innerHTML = "$8.50";
    document.getElementById("friedic").innerHTML = "$8.50";
    document.getElementById("mochi").innerHTML = "$6";
})
/*
";
document.getElementById("").innerHTML = "$
*/
