//====================
const version = "0.05";
//====================

import {Bar} from './bar.js';
import {BeerType, BeerTypes} from './beertype.js';
import {Tap} from './tap.js';

import {Customer} from './customer.js';
import {Order} from './order.js';
import {Beer} from './beer.js';


/* TODO:
    * add breaks for bartenders
*/


const beerinfo = [
    {
        "name":"El Hefe",
        "description":{
            "aroma": "Low to moderate grainy wheat or rye character.  Some malty sweetness is acceptable.  Esters can be moderate to none, although should reflect American yeast strains.  The clove and banana aromas common to German hefeweizens are inappropriate.  Hop aroma may be low to moderate, and can have either a citrusy American or a spicy or floral noble hop character.  Slight crisp sharpness is optional.  No diacetyl.",
            "appearance": "Usually pale yellow to gold.  Clarity may range from brilliant to hazy with yeast approximating the German hefeweizen style of beer.  Big, long-lasting white head.",
            "flavor": "Light to moderately strong grainy wheat or rye flavor, which can linger into the finish.  Rye versions are richer and spicier than wheat.  May have a moderate malty sweetness or finish quite dry.  Low to moderate hop bitterness, which sometimes lasts into the finish.  Low to moderate hop flavor (citrusy American or spicy/floral noble).  Esters can be moderate to none, but should not take on a German Weizen character (banana).  No clove phenols, although a light spiciness from wheat or rye is acceptable.  May have a slightly crisp or sharp finish.  No diacetyl.",
            "mouthfeel": "Medium-light to medium body.  Medium-high to high carbonation.  May have a light alcohol warmth in stronger examples.",
            "overallImpression": "Refreshing wheat or rye beers that can display more hop character and less yeast character than their German cousins."
        },
        "category":"Hefeweizen",
        "label":"elhefe.png",
        "alc": 5.4
    },{
        "name":"Fairy Tale Ale",
        "description":{
            "aroma": "A prominent to intense hop aroma with a citrusy, floral, perfume-like, resinous, piney, and/or fruity character derived from American hops.  Many versions are dry hopped and can have an additional grassy aroma, although this is not required.  Some clean malty sweetness may be found in the background, but should be at a lower level than in English examples.  Fruitiness, either from esters or hops, may also be detected in some versions, although a neutral fermentation character is also acceptable.  Some alcohol may be noted.",
            "appearance": "Color ranges from medium gold to medium reddish copper; some versions can have an orange-ish tint.  Should be clear, although unfiltered dry-hopped versions may be a bit hazy.  Good head stand with white to off-white color should persist.",
            "flavor": "Hop flavor is medium to high, and should reflect an American hop character with citrusy, floral, resinous, piney or fruity aspects.  Medium-high to very high hop bitterness, although the malt backbone will support the strong hop character and provide the best balance.  Malt flavor should be low to medium, and is generally clean and malty sweet although some caramel or toasty flavors are acceptable at low levels. No diacetyl.  Low fruitiness is acceptable but not required.  The bitterness may linger into the aftertaste but should not be harsh.  Medium-dry to dry finish.  Some clean alcohol flavor can be noted in stronger versions.  Oak is inappropriate in this style.  May be slightly sulfury, but most examples do not exhibit this character.",
            "mouthfeel": "Smooth, medium-light to medium-bodied mouthfeel without hop-derived astringency, although moderate to medium-high carbonation can combine to render an overall dry sensation in the presence of malt sweetness.  Some smooth alcohol warming can and should be sensed in stronger (but not all) versions.  Body is generally less than in English counterparts.",
            "overallImpression": "A decidedly hoppy and bitter, moderately strong American pale ale."
        },
        "category":"IPA",
        "label":"fairytaleale.png",
        "alc": 7.9
    },{
        "name":"GitHop",
        "description":{
            "aroma": "A prominent to intense hop aroma with a citrusy, floral, perfume-like, resinous, piney, and/or fruity character derived from American hops.  Many versions are dry hopped and can have an additional grassy aroma, although this is not required.  Some clean malty sweetness may be found in the background, but should be at a lower level than in English examples.  Fruitiness, either from esters or hops, may also be detected in some versions, although a neutral fermentation character is also acceptable.  Some alcohol may be noted.",
            "appearance": "Color ranges from medium gold to medium reddish copper; some versions can have an orange-ish tint.  Should be clear, although unfiltered dry-hopped versions may be a bit hazy.  Good head stand with white to off-white color should persist.",
            "flavor": "Hop flavor is medium to high, and should reflect an American hop character with citrusy, floral, resinous, piney or fruity aspects.  Medium-high to very high hop bitterness, although the malt backbone will support the strong hop character and provide the best balance.  Malt flavor should be low to medium, and is generally clean and malty sweet although some caramel or toasty flavors are acceptable at low levels. No diacetyl.  Low fruitiness is acceptable but not required.  The bitterness may linger into the aftertaste but should not be harsh.  Medium-dry to dry finish.  Some clean alcohol flavor can be noted in stronger versions.  Oak is inappropriate in this style.  May be slightly sulfury, but most examples do not exhibit this character.",
            "mouthfeel": "Smooth, medium-light to medium-bodied mouthfeel without hop-derived astringency, although moderate to medium-high carbonation can combine to render an overall dry sensation in the presence of malt sweetness.  Some smooth alcohol warming can and should be sensed in stronger (but not all) versions.  Body is generally less than in English counterparts.",
            "overallImpression": "A decidedly hoppy and bitter, moderately strong American pale ale."
        },
        "category":"IPA",
        "label":"githop.png",
        "alc": 8.7
    },{
        "name":"Hollaback Lager",
        "description":{
            "aroma": "Rich German malt aroma (of Vienna and/or Munich malt).  A light to moderate toasted malt aroma is often present.  Clean lager aroma with no fruity esters or diacetyl.  No hop aroma.  Caramel aroma is inappropriate.",
            "appearance": "Dark gold to deep orange-red color. Bright clarity, with solid, off-white, foam stand.",
            "flavor": "Initial malty sweetness, but finish is moderately dry.  Distinctive and complex maltiness often includes a toasted aspect.  Hop bitterness is moderate, and noble hop flavor is low to none. Balance is toward malt, though the finish is not sweet.  Noticeable caramel or roasted flavors are inappropriate.  Clean lager character with no diacetyl or fruity esters.",
            "mouthfeel": "Medium body, with a creamy texture and medium carbonation.  Smooth.  Fully fermented, without a cloying finish.",
            "overallImpression": "Smooth, clean, and rather rich, with a depth of malt character.  This is one of the classic malty styles, with a maltiness that is often described as soft, complex, and elegant but never cloying."
        },
        "category":"Oktoberfest",
        "label":"hollaback.png",
        "alc": 6.5
    },{
        "name":"Hoppily Ever After",
        "description":{
            "aroma": "A prominent to intense hop aroma with a citrusy, floral, perfume-like, resinous, piney, and/or fruity character derived from American hops.  Many versions are dry hopped and can have an additional grassy aroma, although this is not required.  Some clean malty sweetness may be found in the background, but should be at a lower level than in English examples.  Fruitiness, either from esters or hops, may also be detected in some versions, although a neutral fermentation character is also acceptable.  Some alcohol may be noted.",
            "appearance": "Color ranges from medium gold to medium reddish copper; some versions can have an orange-ish tint.  Should be clear, although unfiltered dry-hopped versions may be a bit hazy.  Good head stand with white to off-white color should persist.",
            "flavor": "Hop flavor is medium to high, and should reflect an American hop character with citrusy, floral, resinous, piney or fruity aspects.  Medium-high to very high hop bitterness, although the malt backbone will support the strong hop character and provide the best balance.  Malt flavor should be low to medium, and is generally clean and malty sweet although some caramel or toasty flavors are acceptable at low levels. No diacetyl.  Low fruitiness is acceptable but not required.  The bitterness may linger into the aftertaste but should not be harsh.  Medium-dry to dry finish.  Some clean alcohol flavor can be noted in stronger versions.  Oak is inappropriate in this style.  May be slightly sulfury, but most examples do not exhibit this character.",
            "mouthfeel": "Smooth, medium-light to medium-bodied mouthfeel without hop-derived astringency, although moderate to medium-high carbonation can combine to render an overall dry sensation in the presence of malt sweetness.  Some smooth alcohol warming can and should be sensed in stronger (but not all) versions.  Body is generally less than in English counterparts.",
            "overallImpression": "A decidedly hoppy and bitter, moderately strong American pale ale."
        },
        "category":"IPA",
        "label":"hoppilyeverafter.png",
        "alc": 4.5
    },{
        "name":"Mowintime",
        "description":{
            "aroma": "Rich German malt aroma (of Vienna and/or Munich malt).  A light to moderate toasted malt aroma is often present.  Clean lager aroma with no fruity esters or diacetyl.  No hop aroma.  Caramel aroma is inappropriate.",
            "appearance": "Dark gold to deep orange-red color. Bright clarity, with solid, off-white, foam stand.",
            "flavor": "Initial malty sweetness, but finish is moderately dry.  Distinctive and complex maltiness often includes a toasted aspect.  Hop bitterness is moderate, and noble hop flavor is low to none. Balance is toward malt, though the finish is not sweet.  Noticeable caramel or roasted flavors are inappropriate.  Clean lager character with no diacetyl or fruity esters.",
            "mouthfeel": "Medium body, with a creamy texture and medium carbonation.  Smooth.  Fully fermented, without a cloying finish.",
            "overallImpression": "Smooth, clean, and rather rich, with a depth of malt character.  This is one of the classic malty styles, with a maltiness that is often described as soft, complex, and elegant but never cloying."
        },
        "category":"European Lager",
        "label":"mowintime.png",
        "alc": 4
    },{
        "name":"Row 26",
        "description":{
            "aroma": "Moderate to strong aroma of roasted malts, often having a roasted coffee or dark chocolate quality.  Burnt or charcoal aromas are low to none.  Medium to very low hop aroma, often with a citrusy or resiny American hop character.  Esters are optional, but can be present up to medium intensity.  Light alcohol-derived aromatics are also optional.  No diacetyl.",
            "appearance": "Generally a jet black color, although some may appear very dark brown.  Large, persistent head of light tan to light brown in color.  Usually opaque.",
            "flavor": "Moderate to very high roasted malt flavors, often tasting of coffee, roasted coffee beans, dark or bittersweet chocolate.  May have a slightly burnt coffee ground flavor, but this character should not be prominent if present.  Low to medium malt sweetness, often with rich chocolate or caramel flavors.  Medium to high bitterness. Hop flavor can be low to high, and generally reflects citrusy or resiny American varieties.  Light esters may be present but are not required.  Medium to dry finish, occasionally with a light burnt quality.  Alcohol flavors can be present up to medium levels, but smooth.  No diacetyl.",
            "mouthfeel": "Medium to full body.  Can be somewhat creamy, particularly if a small amount of oats have been used to enhance mouthfeel.  Can have a bit of roast-derived astringency, but this character should not be excessive.  Medium-high to high carbonation.  Light to moderately strong alcohol warmth, but smooth and not excessively hot.",
            "overallImpression": "A hoppy, bitter, strongly roasted Foreign-style Stout (of the export variety)."
        },
        "category":"Stout",
        "label":"row26.png",
        "alc": 6.2
    },{
        "name":"Ruined Childhood",
        "description":{
            "aroma": "Variable.  Most exhibit varying amounts of fruity esters, spicy phenols and/or yeast-borne aromatics.  Aromas from actual spice additions may be present.  Hop aroma may be none to high, and may include a dry-hopped character.  Malt aroma may be low to high, and may include character of non-barley grains such as wheat or rye.  Some may include aromas of Belgian microbiota, most commonly Brettanomyces and/or Lactobacillus.  No diacetyl.",
            "appearance": "Variable.  Color varies considerably from pale gold to very dark.  Clarity may be hazy to clear.  Head retention is usually good.  Generally moderate to high carbonation.",
            "flavor": "Variable.  A great variety of flavors are found in these beers.  Maltiness may be light to quite rich.  Hop flavor and bitterness may be low to high.  Spicy flavors may be imparted by yeast (phenolics) and/or actual spice additions.  May include characteristics of grains other than barley, such as wheat or rye.  May include flavors produced by Belgian microbiota such as Brettanomyces or Lactobacillus.  May include flavors from adjuncts such as caramelized sugar syrup or honey.",
            "mouthfeel": "Variable.  Some are well-attenuated, thus fairly light-bodied for their original gravity, while others are thick and rich.  Most are moderately to highly carbonated.  A warming sensation from alcohol may be present in stronger examples.  A “mouth puckering” sensation may be present from acidity.",
            "overallImpression": "Variable.  This category encompasses a wide range of Belgian ales produced by truly artisanal brewers more concerned with creating unique products than in increasing sales."
        },
        "category":"Belgian Specialty Ale",
        "label":"ruinedchildhood.png",
        "alc": 10
    },{
        "name":"Sleighride",
        "description":{
            "aroma": "Variable.  Most exhibit varying amounts of fruity esters, spicy phenols and/or yeast-borne aromatics.  Aromas from actual spice additions may be present.  Hop aroma may be none to high, and may include a dry-hopped character.  Malt aroma may be low to high, and may include character of non-barley grains such as wheat or rye.  Some may include aromas of Belgian microbiota, most commonly Brettanomyces and/or Lactobacillus.  No diacetyl.",
            "appearance": "Variable.  Color varies considerably from pale gold to very dark.  Clarity may be hazy to clear.  Head retention is usually good.  Generally moderate to high carbonation.",
            "flavor": "Variable.  A great variety of flavors are found in these beers.  Maltiness may be light to quite rich.  Hop flavor and bitterness may be low to high.  Spicy flavors may be imparted by yeast (phenolics) and/or actual spice additions.  May include characteristics of grains other than barley, such as wheat or rye.  May include flavors produced by Belgian microbiota such as Brettanomyces or Lactobacillus.  May include flavors from adjuncts such as caramelized sugar syrup or honey.",
            "mouthfeel": "Variable.  Some are well-attenuated, thus fairly light-bodied for their original gravity, while others are thick and rich.  Most are moderately to highly carbonated.  A warming sensation from alcohol may be present in stronger examples.  A “mouth puckering” sensation may be present from acidity.",
            "overallImpression": "Variable.  This category encompasses a wide range of Belgian ales produced by truly artisanal brewers more concerned with creating unique products than in increasing sales."
        },
        "category":"Belgian Specialty Ale",
        "label":"sleighride.png",
        "alc":8.5
    },{
        "name":"Steampunk",
        "description":{
            "aroma": "Typically showcases the signature Northern Brewer hops (with woody, rustic or minty qualities) in moderate to high strength.  Light fruitiness acceptable.  Low to moderate caramel and/or toasty malt aromatics support the hops.  No diacetyl.",
            "appearance": "Medium amber to light copper color.  Generally clear.  Moderate off-white head with good retention.",
            "flavor": "Moderately malty with a pronounced hop bitterness.  The malt character is usually toasty (not roasted) and caramelly.  Low to moderately high hop flavor, usually showing Northern Brewer qualities (woody, rustic, minty).  Finish fairly dry and crisp, with a lingering hop bitterness and a firm, grainy malt flavor.  Light fruity esters are acceptable, but otherwise clean.  No diacetyl.",
            "mouthfeel": "Medium-bodied.  Medium to medium-high carbonation.",
            "overallImpression": "A lightly fruity beer with firm, grainy maltiness, interesting toasty and caramel flavors, and showcasing the signature Northern Brewer varietal hop character."
        },
        "category":"California Common",
        "label":"steampunk.png",
        "alc": 5
    }
];


function createBar(name) {
    const bar = new Bar(name);
    bar.version = version;

    // * create types of beer
    // FUTURE: load beerinfo.json into beerinfo - for now it is just there
    beerinfo.forEach( info => {
        // Create Beertype
        const beerType = new BeerType(info);
    }) 

    // * build storage
    // - add between 2 and 10 kegs of each type
    BeerTypes.all().forEach( beerType => bar.storage.addKegs(beerType, Math.floor(Math.random()*8)+2));

    // * create taps
    // FUTURE: Get numberOfTaps from configuration - for now just use this constant
    const numberOfTaps = 7;

    // let all the taps be random, but no more than two of a kind!
    // - create a list of all beertypes - duplicate and concatenate it to itself - select random indexes and remove
    const possibilities = BeerTypes.all().concat(BeerTypes.all());
    for( let i=0; i < numberOfTaps; i++ ) {
        let keg = null;
        while(keg === null) {        
            const index = Math.floor(Math.random()*possibilities.length);
            const beerType = possibilities[index];

            // get a keg of this type from storage    
            keg = bar.storage.getKeg(beerType);

            // remove beerType from possibilities
            possibilities.splice(index,1);
        }
        // create a tap, and add it to the bar
        const tap = new Tap(keg);
        bar.addTap(tap);
    }

    // * create bartenders
    // FUTURE: Get bartendernames from configuration
    bar.addBartender("Peter");
    bar.addBartender("Jonas");
    bar.addBartender("Martin");
  //  bar.addBartender("Marie"); 
  //  bar.addBartender("Santiago"); 
  //  bar.addBartender("Wes");
  //  bar.addBartender("Sarah");

    console.log("Created Bar '"+bar.name+"' - ready for customers ...");
    bar.open();

    // return the bar
    return bar;
}


// TODO: Move these functions to CustomerGenerator class ...

// create a customer with an order for some random beers
function createCustomer() {
    const customer = new Customer();

    const numberOfBeers = Math.ceil( Math.random() * 4); // TODO: Make better random distribution
    const order = new Order( customer );

    for( let i=0; i < numberOfBeers; i++ ) {
        const beer = createRandomBeer();
        order.addBeer(beer);
    }

    return customer;
}

function createRandomBeer() {
    // ask bar for beertypes

    // TEST: Always require beer-type 0!
//    const beer = new Beer( bar.taps[0].keg.beerType);

    const beer = new Beer( bar.getRandomAvailableBeerType() );
    return beer;
}

// Customer-generator
function CustomerGenerator() {
    
    function generateCustomers(min=0, max=4) {

        // generate between 0 and 4 customers
        for( let number = Math.floor(Math.random()*(max-min))+min; number > 0; number-- ) {
        //    console.log("Generate customer");
            // Never more than 25 customers in queue!
            if( bar.queue.length < 25 ) {
                bar.addCustomer( createCustomer() );
                //console.log("add customer");
            }
        }

        // By default wait 60 seconds before adding to the queue
        // If there are less than 10 people in the queue, wait only 30 seconds
        let nextCustomerIn = 60;
        if( bar.queue.length < 10 ) {
            nextCustomerIn = 30;
        }
        // If the queue is empty, wait only 10 seconds
        if( bar.queue.length === 0 ) {
            nextCustomerIn = 10;
        }

        setTimeout( generateCustomers, nextCustomerIn*1000 );
    }

    // First time it is called, generate a queue between 5 and 15 people
    generateCustomers(5,15);
    console.log("Initialised CustomerGenerator with " + bar.queue.length + " customers");
}


const bar = createBar("FooBar");
CustomerGenerator();

// For "exporting" to normal use outside modules
window.FooBar = bar;