/*
 * Data source, informations about items
 */
(function(){

    angular
        .module("airplaneFacts")
        .factory("DataService", DataService);

   
    function DataService(){
        
        var dataObj = {
            airplaineData: airplaineData,
        };

        return dataObj;
    }



    var airplaineData = [
        {
            name: "Airbus-A380",
            image_url: "http://duibe7slt06r7.cloudfront.net/Live/Binaries/fr-FR/images/Airbus-A380-large_tcm53-3661.jpg",            
            manufacture: "Airbus",
            capacity: " 525 passengers",                   
            dateservice: "27 April 2005",               
            description: "The Airbus A380 is a double-deck, wide-body, four-engine jet airliner manufactured by European manufacturer Airbus. It is the world's largest passenger airliner, and the airports at which it operates have upgraded facilities to accommodate it. It was initially named Airbus A3XX and designed to challenge Boeing's monopoly in the large-aircraft market. The A380 made its first flight on 27 April 2005 and entered commercial service on 25 October 2007 with Singapore Airlines.",           
        },

        {
            name: "Boeing 747",
            image_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f4/Boeing_747-400_Dreamliner_livery.jpg/1024px-Boeing_747-400_Dreamliner_livery.jpg",            
            manufacture: "Boeing",
            capacity: "467 passengers",                   
            dateservice: "February 9, 1969",               
            description: "The Boeing 747 is an American wide-body commercial jet airliner and cargo aircraft, often referred to by its original nickname, Jumbo Jet. Its distinctive upper deck along the forward part of the aircraft makes it among the world's most recognizable aircraft, and it was the first wide-body produced. Manufactured by Boeing's Commercial Airplane unit in the United States, the original version of the 747 was envisioned to have 150 percent greater capacity than the Boeing 707, one of the common large commercial aircraft of the 1960s. First flown commercially in 1970, the 747 held the passenger capacity record for 37 years. As of January 2017, the 747 has been involved in 60 hull losses, resulting in 3722 fatalities."
         },

         {
            name: "Airbus-A350",
            image_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/A350_First_Flight_-_Low_pass_03.jpg/1024px-A350_First_Flight_-_Low_pass_03.jpg",            
            manufacture: "Airbus",
            capacity: " Max 440 passengers",                   
            dateservice: "June 14, 2013",               
            description: "The Airbus A350 XWB is a family of long-range, twin-engine wide-body jet airliners developed by European aircraft manufacturer Airbus. The A350 is the first Airbus aircraft with both fuselage and wing structures made primarily of carbon-fibre-reinforced polymer. Its variants seat 280 to 366 passengers in typical three-class seating layouts. The A350 is positioned to succeed the A340, and compete with the Boeing 787 and 777",
        },

         {
            name: "Boeing 777",
            image_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c7/Boeing_777_above_clouds%2C_crop.jpg/1280px-Boeing_777_above_clouds%2C_crop.jpg",            
            manufacture: "Boeing",
            capacity: " Max 440 passengers",                   
            dateservice: "June 12, 1994",               
            description: "The Boeing 777 is a family of long-range wide-body twin-engine jet airliners developed and manufactured by Boeing Commercial Airplanes. It is the world's largest twinjet and has a typical seating capacity of 314 to 396 passengers, with a range of 5,240 to 8,555 nautical miles (9,704 to 15,844 km). Commonly referred to as the  its distinguishing features include the largest-diameter turbofan engines of any aircraft, six wheels on each main landing gear, fully circular fuselage cross-section,[5] and a blade-shaped tail cone.[6] Developed in consultation with eight major airlines, the 777 was designed to replace older wide-body airliners and bridge the capacity difference between Boeing's 767 and 747. As Boeing's first fly-by-wire airliner, it has computer-mediated controls. It was also the first commercial aircraft to be designed entirely with computer-aided design.",
        },

         {
            name: "Concorde",
            image_url: "https://upload.wikimedia.org/wikipedia/commons/e/eb/British_Airways_Concorde_G-BOAC_03.jpg",            
            manufacture: "Boeing",
            capacity: " Max 440 passengers",                   
            dateservice: "June 12, 1994",               
            description: "The Boeing 777 is a family of long-range wide-body twin-engine jet airliners developed and manufactured by Boeing Commercial Airplanes. It is the world's largest twinjet and has a typical seating capacity of 314 to 396 passengers, with a range of 5,240 to 8,555 nautical miles (9,704 to 15,844 km). Commonly referred to as the  its distinguishing features include the largest-diameter turbofan engines of any aircraft, six wheels on each main landing gear, fully circular fuselage cross-section,[5] and a blade-shaped tail cone.[6] Developed in consultation with eight major airlines, the 777 was designed to replace older wide-body airliners and bridge the capacity difference between Boeing's 767 and 747. As Boeing's first fly-by-wire airliner, it has computer-mediated controls. It was also the first commercial aircraft to be designed entirely with computer-aided design.",
        },

          {
            name: "CSeries",
            image_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/Bombardier%2C_BD-500_CSeries_CS300%2C_C-FFDK_-_SIAE_2015_%2818887460245%29.jpg/1024px-Bombardier%2C_BD-500_CSeries_CS300%2C_C-FFDK_-_SIAE_2015_%2818887460245%29.jpg",            
            manufacture: "Bombardier",
            capacity: " 130 - 160 passengers",                   
            dateservice: "16 September 2013",               
            description: " The Bombardier CSeries or C Series (officially BD-500-1A10 [CS100] / -1A11 [CS300])[6] is a family of narrow-body, twin-engine, medium-range jet airliners by Canadian manufacturer Bombardier Aerospace.",
        },
      
    ];

})();
