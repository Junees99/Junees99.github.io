(function(window, undefined) {
  var dictionary = {
    "bf212d3a-87d9-44cf-82e1-fda3a390aef4": "Inventory",
    "726bc2bc-b249-4e8c-840e-43d2246652e9": "Payment",
    "18b22be3-a96f-4902-aeb3-6bdacacc8407": "Membership",
    "d12245cc-1680-458d-89dd-4f0d7fb22724": "Account Login",
    "1d987c69-bcc2-456d-a4f4-a00cd7d0069c": "Inventory2",
    "83550280-c8e2-4562-bbb3-1ecc7c081598": "Sales Track",
    "82d1c305-f244-4486-a5ad-573d37306d12": "FAQ",
    "93ce518f-71da-4393-bc9b-4a02d9d14edd": "POS5",
    "c52f737f-7d9a-494b-968b-17c3a015c677": "POS4",
    "eb323ebf-826f-4e64-94a1-e2c7d0271f20": "POS",
    "c749b801-3a93-4765-b6ca-eb13df990a4c": "POS2",
    "9ed38f09-e1e2-446f-a528-26f4ea8f238e": "FAQ2",
    "e73b655d-d3ec-4dcc-a55c-6e0293422bde": "960 grid - 16 columns",
    "ef07b413-721c-418e-81b1-33a7ed533245": "960 grid - 12 columns",
    "f39803f7-df02-4169-93eb-7547fb8c961a": "Template 1",
    "bb8abf58-f55e-472d-af05-a7d1bb0cc014": "default"
  };

  var uriRE = /^(\/#)?(screens|templates|masters|scenarios)\/(.*)(\.html)?/;
  window.lookUpURL = function(fragment) {
    var matches = uriRE.exec(fragment || "") || [],
        folder = matches[2] || "",
        canvas = matches[3] || "",
        name, url;
    if(dictionary.hasOwnProperty(canvas)) { /* search by name */
      url = folder + "/" + canvas;
    }
    return url;
  };

  window.lookUpName = function(fragment) {
    var matches = uriRE.exec(fragment || "") || [],
        folder = matches[2] || "",
        canvas = matches[3] || "",
        name, canvasName;
    if(dictionary.hasOwnProperty(canvas)) { /* search by name */
      canvasName = dictionary[canvas];
    }
    return canvasName;
  };
})(window);