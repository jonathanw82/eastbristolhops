// Pest text and infomation displayed when the respective buttons are pressed

let aphids = `<div class="col-sm-12">
    <p>
        Aphids
    </p>
    <img class="trellisimg"
        src="https://images.immediate.co.uk/production/volatile/sites/10/2018/02/4b618c4f-4b55-43db-976d-56c41331876e-837427f.jpg?quality=90&resize=768%2C574"
        alt="Aphids">
    <p>
        Aphids are a common garden pest but they can takeover hop plants, they are also key to quite a
        few hop plant disease, they chew into the stems and
        the underside of the leaves sucking on the sap,
        causing leaves to go yellow and weak young plants may become stunted, they also excrete a liquid
        call (Honeydew) that can cause other problems such as sooty mould.<br> To get rid of aphids, a
        simple spray bottle with washing up liquid and water in should do it. However, only as a last
        resort if you are going
        to treat your hops please do so early in the season and not after mid-august as we don't want
        soapy beer,
        Spray in the evening after any direct sunlight or the leaves will get burn patches.
    </p>
    <button onclick="pestclose()" >Close</button>
</div>`;

let sooty = ` <div class="col-sm-12">
<p>
    Sooty Mould
</p>
<img class="trellisimg"
    src="https://irontreeservice.com/wp-content/uploads/2016/06/Sooty-Mold-350x0-c-default.jpg"
    alt="Sooty mould">
<p>
    Sooty mould causes a layer of black mould the covers leaves and cones, it causes the leaves to
    die back and the bine to wilt, Sooty Mould grows on the honeydew left behind by aphids. To teat
    this mould you have to tackle the aphids that cause it in the first place.
</p>
<button onclick="pestclose()" >Close</button>
</div>`;

let mosaic = ` <div class="col-sm-12">
<p>
    Mosaic virus
</p>
<img class="trellisimg"
    src="https://www.canr.msu.edu/uploads/images/Plant%20Ag/Apple_mosaic_on_hop.jpg"
    alt="Mosaic Virus">
<p>
    Caused once again by aphids, mosaic virus or hop mosaic virus is one of the most serious hop
    plant diseases. It causes yellow and green leaf mottling between the leaf veins and overall
    stunted growth of the plants.
</p>
<button onclick="pestclose()" >Close</button>
</div>`;

let vert = ` <div class="col-sm-12">
<p>
    Verticillium wilt
</p>
<img class="trellisimg" src="https://bugwoodcloud.org/images/768x512/0656092.jpg"
    alt="Verticillium wilt">
<p>
    This is a soil bourn disease, caused by two types of fungus, it causes yellowing of the leaves
    that start at the base of the plant, the bines can also look swollen, brown and discoloured.
    Heavily infected plants tend to die on the string, usually just before or at harvest!
    A common treatment is to let the plants become resistant to it, so remove the infected leaves
    and bines.
</p>
<button onclick="pestclose()" >Close</button>
</div>`;

let mildew = `<div class="col-sm-12">
<p>
    Downy Mildew & Powdery Mildew
</p>
<img class="trellisimg"
    src="https://upload.wikimedia.org/wikipedia/commons/b/b8/Downy_and_Powdery_mildew_on_grape_leaf.JPG"
    alt="Downy mildew">
<p>
    Downy Mildew, causes the plant to become stunted. The cones brown and curl and the underside of
    leaves become mottled with brown lesions and a yellow halo.
</p>
<p>
    Powdery Mildew, causes white fungus spots on the leaves. Pale green to yellow spots on the
    leaves
    with white patches on the stems and cones. The plant's growth will be slow and the leaves
    become covered with the white mildew.
</p>
<button onclick="pestclose()" >Close</button>
</div>`;

let nute = `<div class="col-sm-12">
<p>
    Nutrient deficiency
</p>
<img class="trellisimg" src="https://onspecialtycrops.files.wordpress.com/2015/07/hopperburn.jpg"
    alt="Nutrient deficiency">
<p>
    By far the most common problem, other than over or under watering, especially in potted hops plants are nutrient deficiencies. <br>Hops strip the
    soil of nutrients, in the ground decaying plant matter will normally become the food of choice,
    but in pots, they tend to suffer.
    Chicken manure pellets are a good way of feeding hops plants but use them sparingly as high
    nitrogen levels can cause Verticillium wilt to rear its ugly head.
    Alternatively, repot the hops with good quality compost, try to get the best quality you budget
    will allow, and avoid the idea of 99p bags of compost, cheaper grades of compost can
    commonly contain Chafer grubs that will have a field day chewing on you hops rhizome.
</p>
<button onclick="pestclose()" >Close</button>
</div>`;