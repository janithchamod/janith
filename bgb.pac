var FindProxyForURL = function(init, profiles) {
    return function(url, host) {
        "use strict";
        var result = init, scheme = url.substr(0, url.indexOf(":"));
        do {
            result = profiles[result];
            if (typeof result === "function") result = result(url, host, scheme);
        } while (typeof result !== "string" || result.charCodeAt(0) === 43);
        return result;
    };
}("+Germany", {
    "+Germany": function() {
        ;
function FindProxyForURL(url, host) {
  return "HTTPS default.px.skyzip.de:443;";
}

/* End of PAC */;
        return FindProxyForURL;
    }.call(this)
});