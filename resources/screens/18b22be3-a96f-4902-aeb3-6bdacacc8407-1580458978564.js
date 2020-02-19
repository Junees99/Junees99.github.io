jQuery("#simulation")
  .on("click", ".s-18b22be3-a96f-4902-aeb3-6bdacacc8407 .click", function(event, data) {
    var jEvent, jFirer, cases;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getEventFirer();
    if(jFirer.is("#s-Button-blue")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-18b22be3-a96f-4902-aeb3-6bdacacc8407 #s-Button-blue > .backgroundLayer": {
                      "attributes": {
                        "border-top-color": "#80B8F1",
                        "border-right-color": "#80B8F1",
                        "border-bottom-color": "#80B8F1",
                        "border-left-color": "#80B8F1"
                      }
                    }
                  },{
                    "#s-18b22be3-a96f-4902-aeb3-6bdacacc8407 #s-Button-blue span": {
                      "attributes": {
                        "color": "#80B8F1"
                      }
                    }
                  },{
                    "#s-18b22be3-a96f-4902-aeb3-6bdacacc8407 #s-Button-blue": {
                      "attributes-ie": {
                        "border-top-color": "#80B8F1",
                        "border-right-color": "#80B8F1",
                        "border-bottom-color": "#80B8F1",
                        "border-left-color": "#80B8F1"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-18b22be3-a96f-4902-aeb3-6bdacacc8407 #s-Button-blue > .backgroundLayer": {
                      "attributes": {
                        "border-top-color": "#157EFB",
                        "border-right-color": "#157EFB",
                        "border-bottom-color": "#157EFB",
                        "border-left-color": "#157EFB"
                      }
                    }
                  },{
                    "#s-18b22be3-a96f-4902-aeb3-6bdacacc8407 #s-Button-blue span": {
                      "attributes": {
                        "color": "#157EFB"
                      }
                    }
                  },{
                    "#s-18b22be3-a96f-4902-aeb3-6bdacacc8407 #s-Button-blue": {
                      "attributes-ie": {
                        "border-top-color": "#157EFB",
                        "border-right-color": "#157EFB",
                        "border-bottom-color": "#157EFB",
                        "border-left-color": "#157EFB"
                      }
                    }
                  } ],
                  "exectype": "timed",
                  "delay": 300
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Button-blue_1")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-18b22be3-a96f-4902-aeb3-6bdacacc8407 #s-Button-blue_1 > .backgroundLayer": {
                      "attributes": {
                        "border-top-color": "#80B8F1",
                        "border-right-color": "#80B8F1",
                        "border-bottom-color": "#80B8F1",
                        "border-left-color": "#80B8F1"
                      }
                    }
                  },{
                    "#s-18b22be3-a96f-4902-aeb3-6bdacacc8407 #s-Button-blue_1 span": {
                      "attributes": {
                        "color": "#80B8F1"
                      }
                    }
                  },{
                    "#s-18b22be3-a96f-4902-aeb3-6bdacacc8407 #s-Button-blue_1": {
                      "attributes-ie": {
                        "border-top-color": "#80B8F1",
                        "border-right-color": "#80B8F1",
                        "border-bottom-color": "#80B8F1",
                        "border-left-color": "#80B8F1"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-18b22be3-a96f-4902-aeb3-6bdacacc8407 #s-Button-blue_1 > .backgroundLayer": {
                      "attributes": {
                        "border-top-color": "#157EFB",
                        "border-right-color": "#157EFB",
                        "border-bottom-color": "#157EFB",
                        "border-left-color": "#157EFB"
                      }
                    }
                  },{
                    "#s-18b22be3-a96f-4902-aeb3-6bdacacc8407 #s-Button-blue_1 span": {
                      "attributes": {
                        "color": "#157EFB"
                      }
                    }
                  },{
                    "#s-18b22be3-a96f-4902-aeb3-6bdacacc8407 #s-Button-blue_1": {
                      "attributes-ie": {
                        "border-top-color": "#157EFB",
                        "border-right-color": "#157EFB",
                        "border-bottom-color": "#157EFB",
                        "border-left-color": "#157EFB"
                      }
                    }
                  } ],
                  "exectype": "timed",
                  "delay": 300
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Text_1")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/eb323ebf-826f-4e64-94a1-e2c7d0271f20"
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        },
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/eb323ebf-826f-4e64-94a1-e2c7d0271f20"
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Text_2")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/83550280-c8e2-4562-bbb3-1ecc7c081598"
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Text_4")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/bf212d3a-87d9-44cf-82e1-fda3a390aef4"
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        },
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/bf212d3a-87d9-44cf-82e1-fda3a390aef4"
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Text_5")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/18b22be3-a96f-4902-aeb3-6bdacacc8407"
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Text_7")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/82d1c305-f244-4486-a5ad-573d37306d12"
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    }
  })
  .on("mouseup", ".s-18b22be3-a96f-4902-aeb3-6bdacacc8407 .mouseup", function(event, data) {
    var jEvent, jFirer, cases;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getEventFirer();
    if(jFirer.is("#s-Text_1")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-18b22be3-a96f-4902-aeb3-6bdacacc8407 #s-Text_1 > .backgroundLayer": {
                      "attributes": {
                        "background-color": "transparent"
                      }
                    }
                  },{
                    "#s-18b22be3-a96f-4902-aeb3-6bdacacc8407 #s-Text_1": {
                      "attributes": {
                        "font-size": "10.0pt",
                        "font-family": "'OpenSans-Light',Arial"
                      }
                    }
                  },{
                    "#s-18b22be3-a96f-4902-aeb3-6bdacacc8407 #s-Text_1 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "center"
                      }
                    }
                  },{
                    "#s-18b22be3-a96f-4902-aeb3-6bdacacc8407 #s-Text_1 span": {
                      "attributes": {
                        "color": "#FFFFFF",
                        "text-align": "center",
                        "text-decoration": "none",
                        "font-family": "'OpenSans-Light',Arial",
                        "font-size": "10.0pt"
                      }
                    }
                  },{
                    "#s-18b22be3-a96f-4902-aeb3-6bdacacc8407 #s-Text_1": {
                      "attributes-ie": {
                        "-pie-background": "transparent",
                        "-pie-poll": "false"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Text_2")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-18b22be3-a96f-4902-aeb3-6bdacacc8407 #s-Text_2 > .backgroundLayer": {
                      "attributes": {
                        "background-color": "transparent"
                      }
                    }
                  },{
                    "#s-18b22be3-a96f-4902-aeb3-6bdacacc8407 #s-Text_2": {
                      "attributes": {
                        "font-size": "10.0pt",
                        "font-family": "'OpenSans-Light',Arial"
                      }
                    }
                  },{
                    "#s-18b22be3-a96f-4902-aeb3-6bdacacc8407 #s-Text_2 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "center"
                      }
                    }
                  },{
                    "#s-18b22be3-a96f-4902-aeb3-6bdacacc8407 #s-Text_2 span": {
                      "attributes": {
                        "color": "#FFFFFF",
                        "text-align": "center",
                        "text-decoration": "none",
                        "font-family": "'OpenSans-Light',Arial",
                        "font-size": "10.0pt"
                      }
                    }
                  },{
                    "#s-18b22be3-a96f-4902-aeb3-6bdacacc8407 #s-Text_2": {
                      "attributes-ie": {
                        "-pie-background": "transparent",
                        "-pie-poll": "false"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Text_4")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-18b22be3-a96f-4902-aeb3-6bdacacc8407 #s-Text_4 > .backgroundLayer": {
                      "attributes": {
                        "background-color": "transparent"
                      }
                    }
                  },{
                    "#s-18b22be3-a96f-4902-aeb3-6bdacacc8407 #s-Text_4": {
                      "attributes": {
                        "font-size": "10.0pt",
                        "font-family": "'OpenSans-Light',Arial"
                      }
                    }
                  },{
                    "#s-18b22be3-a96f-4902-aeb3-6bdacacc8407 #s-Text_4 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "center"
                      }
                    }
                  },{
                    "#s-18b22be3-a96f-4902-aeb3-6bdacacc8407 #s-Text_4 span": {
                      "attributes": {
                        "color": "#FFFFFF",
                        "text-align": "center",
                        "text-decoration": "none",
                        "font-family": "'OpenSans-Light',Arial",
                        "font-size": "10.0pt"
                      }
                    }
                  },{
                    "#s-18b22be3-a96f-4902-aeb3-6bdacacc8407 #s-Text_4": {
                      "attributes-ie": {
                        "-pie-background": "transparent",
                        "-pie-poll": "false"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Text_5")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-18b22be3-a96f-4902-aeb3-6bdacacc8407 #s-Text_5 > .backgroundLayer": {
                      "attributes": {
                        "background-color": "transparent"
                      }
                    }
                  },{
                    "#s-18b22be3-a96f-4902-aeb3-6bdacacc8407 #s-Text_5": {
                      "attributes": {
                        "font-size": "10.0pt",
                        "font-family": "'OpenSans-Light',Arial"
                      }
                    }
                  },{
                    "#s-18b22be3-a96f-4902-aeb3-6bdacacc8407 #s-Text_5 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "center"
                      }
                    }
                  },{
                    "#s-18b22be3-a96f-4902-aeb3-6bdacacc8407 #s-Text_5 span": {
                      "attributes": {
                        "color": "#FFFFFF",
                        "text-align": "center",
                        "text-decoration": "none",
                        "font-family": "'OpenSans-Light',Arial",
                        "font-size": "10.0pt"
                      }
                    }
                  },{
                    "#s-18b22be3-a96f-4902-aeb3-6bdacacc8407 #s-Text_5": {
                      "attributes-ie": {
                        "-pie-background": "transparent",
                        "-pie-poll": "false"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Text_7")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-18b22be3-a96f-4902-aeb3-6bdacacc8407 #s-Text_7 > .backgroundLayer": {
                      "attributes": {
                        "background-color": "transparent"
                      }
                    }
                  },{
                    "#s-18b22be3-a96f-4902-aeb3-6bdacacc8407 #s-Text_7": {
                      "attributes": {
                        "font-size": "10.0pt",
                        "font-family": "'OpenSans-Light',Arial"
                      }
                    }
                  },{
                    "#s-18b22be3-a96f-4902-aeb3-6bdacacc8407 #s-Text_7 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "center"
                      }
                    }
                  },{
                    "#s-18b22be3-a96f-4902-aeb3-6bdacacc8407 #s-Text_7 span": {
                      "attributes": {
                        "color": "#FFFFFF",
                        "text-align": "center",
                        "text-decoration": "none",
                        "font-family": "'OpenSans-Light',Arial",
                        "font-size": "10.0pt"
                      }
                    }
                  },{
                    "#s-18b22be3-a96f-4902-aeb3-6bdacacc8407 #s-Text_7": {
                      "attributes-ie": {
                        "-pie-background": "transparent",
                        "-pie-poll": "false"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    }
  })
  .on("mousedown", ".s-18b22be3-a96f-4902-aeb3-6bdacacc8407 .mousedown", function(event, data) {
    var jEvent, jFirer, cases;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getEventFirer();
    if(jFirer.is("#s-Text_1")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-18b22be3-a96f-4902-aeb3-6bdacacc8407 #s-Text_1 > .backgroundLayer": {
                      "attributes": {
                        "background-color": "#DDDDDD"
                      }
                    }
                  },{
                    "#s-18b22be3-a96f-4902-aeb3-6bdacacc8407 #s-Text_1 span": {
                      "attributes": {
                        "color": "#282828"
                      }
                    }
                  },{
                    "#s-18b22be3-a96f-4902-aeb3-6bdacacc8407 #s-Text_1": {
                      "attributes-ie": {
                        "-pie-background": "#DDDDDD",
                        "-pie-poll": "false"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Text_2")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-18b22be3-a96f-4902-aeb3-6bdacacc8407 #s-Text_2 > .backgroundLayer": {
                      "attributes": {
                        "background-color": "#DDDDDD"
                      }
                    }
                  },{
                    "#s-18b22be3-a96f-4902-aeb3-6bdacacc8407 #s-Text_2 span": {
                      "attributes": {
                        "color": "#282828"
                      }
                    }
                  },{
                    "#s-18b22be3-a96f-4902-aeb3-6bdacacc8407 #s-Text_2": {
                      "attributes-ie": {
                        "-pie-background": "#DDDDDD",
                        "-pie-poll": "false"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Text_4")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-18b22be3-a96f-4902-aeb3-6bdacacc8407 #s-Text_4 > .backgroundLayer": {
                      "attributes": {
                        "background-color": "#DDDDDD"
                      }
                    }
                  },{
                    "#s-18b22be3-a96f-4902-aeb3-6bdacacc8407 #s-Text_4 span": {
                      "attributes": {
                        "color": "#282828"
                      }
                    }
                  },{
                    "#s-18b22be3-a96f-4902-aeb3-6bdacacc8407 #s-Text_4": {
                      "attributes-ie": {
                        "-pie-background": "#DDDDDD",
                        "-pie-poll": "false"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Text_5")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-18b22be3-a96f-4902-aeb3-6bdacacc8407 #s-Text_5 > .backgroundLayer": {
                      "attributes": {
                        "background-color": "#DDDDDD"
                      }
                    }
                  },{
                    "#s-18b22be3-a96f-4902-aeb3-6bdacacc8407 #s-Text_5 span": {
                      "attributes": {
                        "color": "#282828"
                      }
                    }
                  },{
                    "#s-18b22be3-a96f-4902-aeb3-6bdacacc8407 #s-Text_5": {
                      "attributes-ie": {
                        "-pie-background": "#DDDDDD",
                        "-pie-poll": "false"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Text_7")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-18b22be3-a96f-4902-aeb3-6bdacacc8407 #s-Text_7 > .backgroundLayer": {
                      "attributes": {
                        "background-color": "#DDDDDD"
                      }
                    }
                  },{
                    "#s-18b22be3-a96f-4902-aeb3-6bdacacc8407 #s-Text_7 span": {
                      "attributes": {
                        "color": "#282828"
                      }
                    }
                  },{
                    "#s-18b22be3-a96f-4902-aeb3-6bdacacc8407 #s-Text_7": {
                      "attributes-ie": {
                        "-pie-background": "#DDDDDD",
                        "-pie-poll": "false"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    }
  })
  .on("click", ".s-18b22be3-a96f-4902-aeb3-6bdacacc8407 .toggle", function(event, data) {
    var jEvent, jFirer, cases;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getEventFirer();
    if(jFirer.is("#s-Hotspot_1")) {
      if(jFirer.data("jimHasToggle")) {
        jFirer.removeData("jimHasToggle");
        jEvent.undoCases(jFirer);
      } else {
        jFirer.data("jimHasToggle", true);
        event.backupState = true;
        event.target = jFirer;
        cases = [
          {
            "blocks": [
              {
                "actions": [
                  {
                    "action": "jimChangeStyle",
                    "parameter": [ {
                      "#s-18b22be3-a96f-4902-aeb3-6bdacacc8407 #s-Rectangle_14 > .backgroundLayer": {
                        "attributes": {
                          "background-color": "#CBCBCB"
                        }
                      }
                    },{
                      "#s-18b22be3-a96f-4902-aeb3-6bdacacc8407 #s-Rectangle_14": {
                        "attributes-ie": {
                          "-pie-background": "#CBCBCB",
                          "-pie-poll": "false"
                        }
                      }
                    } ],
                    "exectype": "serial",
                    "delay": 0
                  }
                ]
              }
            ],
            "exectype": "serial",
            "delay": 0
          }
        ];
        jEvent.launchCases(cases);
      }
    } else if(jFirer.is("#s-Hotspot_2")) {
      if(jFirer.data("jimHasToggle")) {
        jFirer.removeData("jimHasToggle");
        jEvent.undoCases(jFirer);
      } else {
        jFirer.data("jimHasToggle", true);
        event.backupState = true;
        event.target = jFirer;
        cases = [
          {
            "blocks": [
              {
                "actions": [
                  {
                    "action": "jimChangeStyle",
                    "parameter": [ {
                      "#s-18b22be3-a96f-4902-aeb3-6bdacacc8407 #s-Rectangle_15 > .backgroundLayer": {
                        "attributes": {
                          "background-color": "#FFFFFF"
                        }
                      }
                    },{
                      "#s-18b22be3-a96f-4902-aeb3-6bdacacc8407 #s-Rectangle_15": {
                        "attributes-ie": {
                          "-pie-background": "#FFFFFF",
                          "-pie-poll": "false"
                        }
                      }
                    } ],
                    "exectype": "serial",
                    "delay": 0
                  }
                ]
              }
            ],
            "exectype": "serial",
            "delay": 0
          }
        ];
        jEvent.launchCases(cases);
      }
    } else if(jFirer.is("#s-Hotspot_3")) {
      if(jFirer.data("jimHasToggle")) {
        jFirer.removeData("jimHasToggle");
        jEvent.undoCases(jFirer);
      } else {
        jFirer.data("jimHasToggle", true);
        event.backupState = true;
        event.target = jFirer;
        cases = [
          {
            "blocks": [
              {
                "actions": [
                  {
                    "action": "jimChangeStyle",
                    "parameter": [ {
                      "#s-18b22be3-a96f-4902-aeb3-6bdacacc8407 #s-Rectangle_16 > .backgroundLayer": {
                        "attributes": {
                          "background-color": "#CBCBCB"
                        }
                      }
                    },{
                      "#s-18b22be3-a96f-4902-aeb3-6bdacacc8407 #s-Rectangle_16": {
                        "attributes-ie": {
                          "-pie-background": "#CBCBCB",
                          "-pie-poll": "false"
                        }
                      }
                    } ],
                    "exectype": "serial",
                    "delay": 0
                  }
                ]
              }
            ],
            "exectype": "serial",
            "delay": 0
          }
        ];
        jEvent.launchCases(cases);
      }
    } else if(jFirer.is("#s-Hotspot_4")) {
      if(jFirer.data("jimHasToggle")) {
        jFirer.removeData("jimHasToggle");
        jEvent.undoCases(jFirer);
      } else {
        jFirer.data("jimHasToggle", true);
        event.backupState = true;
        event.target = jFirer;
        cases = [
          {
            "blocks": [
              {
                "actions": [
                  {
                    "action": "jimChangeStyle",
                    "parameter": [ {
                      "#s-18b22be3-a96f-4902-aeb3-6bdacacc8407 #s-Rectangle_26 > .backgroundLayer": {
                        "attributes": {
                          "background-color": "#FFFFFF"
                        }
                      }
                    },{
                      "#s-18b22be3-a96f-4902-aeb3-6bdacacc8407 #s-Rectangle_26": {
                        "attributes-ie": {
                          "-pie-background": "#FFFFFF",
                          "-pie-poll": "false"
                        }
                      }
                    } ],
                    "exectype": "serial",
                    "delay": 0
                  }
                ]
              }
            ],
            "exectype": "serial",
            "delay": 0
          }
        ];
        jEvent.launchCases(cases);
      }
    } else if(jFirer.is("#s-Hotspot_5")) {
      if(jFirer.data("jimHasToggle")) {
        jFirer.removeData("jimHasToggle");
        jEvent.undoCases(jFirer);
      } else {
        jFirer.data("jimHasToggle", true);
        event.backupState = true;
        event.target = jFirer;
        cases = [
          {
            "blocks": [
              {
                "actions": [
                  {
                    "action": "jimChangeStyle",
                    "parameter": [ {
                      "#s-18b22be3-a96f-4902-aeb3-6bdacacc8407 #s-Rectangle_27 > .backgroundLayer": {
                        "attributes": {
                          "background-color": "#CBCBCB"
                        }
                      }
                    },{
                      "#s-18b22be3-a96f-4902-aeb3-6bdacacc8407 #s-Rectangle_27": {
                        "attributes-ie": {
                          "-pie-background": "#CBCBCB",
                          "-pie-poll": "false"
                        }
                      }
                    } ],
                    "exectype": "serial",
                    "delay": 0
                  }
                ]
              }
            ],
            "exectype": "serial",
            "delay": 0
          }
        ];
        jEvent.launchCases(cases);
      }
    } else if(jFirer.is("#s-Hotspot_6")) {
      if(jFirer.data("jimHasToggle")) {
        jFirer.removeData("jimHasToggle");
        jEvent.undoCases(jFirer);
      } else {
        jFirer.data("jimHasToggle", true);
        event.backupState = true;
        event.target = jFirer;
        cases = [
          {
            "blocks": [
              {
                "actions": [
                  {
                    "action": "jimChangeStyle",
                    "parameter": [ {
                      "#s-18b22be3-a96f-4902-aeb3-6bdacacc8407 #s-Rectangle_28 > .backgroundLayer": {
                        "attributes": {
                          "background-color": "#FFFFFF"
                        }
                      }
                    },{
                      "#s-18b22be3-a96f-4902-aeb3-6bdacacc8407 #s-Rectangle_28": {
                        "attributes-ie": {
                          "-pie-background": "#FFFFFF",
                          "-pie-poll": "false"
                        }
                      }
                    } ],
                    "exectype": "serial",
                    "delay": 0
                  }
                ]
              }
            ],
            "exectype": "serial",
            "delay": 0
          }
        ];
        jEvent.launchCases(cases);
      }
    } else if(jFirer.is("#s-Hotspot_7")) {
      if(jFirer.data("jimHasToggle")) {
        jFirer.removeData("jimHasToggle");
        jEvent.undoCases(jFirer);
      } else {
        jFirer.data("jimHasToggle", true);
        event.backupState = true;
        event.target = jFirer;
        cases = [
          {
            "blocks": [
              {
                "actions": [
                  {
                    "action": "jimChangeStyle",
                    "parameter": [ {
                      "#s-18b22be3-a96f-4902-aeb3-6bdacacc8407 #s-Rectangle_38 > .backgroundLayer": {
                        "attributes": {
                          "background-color": "#CBCBCB"
                        }
                      }
                    },{
                      "#s-18b22be3-a96f-4902-aeb3-6bdacacc8407 #s-Rectangle_38": {
                        "attributes-ie": {
                          "-pie-background": "#CBCBCB",
                          "-pie-poll": "false"
                        }
                      }
                    } ],
                    "exectype": "serial",
                    "delay": 0
                  }
                ]
              }
            ],
            "exectype": "serial",
            "delay": 0
          }
        ];
        jEvent.launchCases(cases);
      }
    } else if(jFirer.is("#s-Hotspot_8")) {
      if(jFirer.data("jimHasToggle")) {
        jFirer.removeData("jimHasToggle");
        jEvent.undoCases(jFirer);
      } else {
        jFirer.data("jimHasToggle", true);
        event.backupState = true;
        event.target = jFirer;
        cases = [
          {
            "blocks": [
              {
                "actions": [
                  {
                    "action": "jimChangeStyle",
                    "parameter": [ {
                      "#s-18b22be3-a96f-4902-aeb3-6bdacacc8407 #s-Rectangle_39 > .backgroundLayer": {
                        "attributes": {
                          "background-color": "#CBCBCB"
                        }
                      }
                    },{
                      "#s-18b22be3-a96f-4902-aeb3-6bdacacc8407 #s-Rectangle_39": {
                        "attributes-ie": {
                          "-pie-background": "#CBCBCB",
                          "-pie-poll": "false"
                        }
                      }
                    } ],
                    "exectype": "serial",
                    "delay": 0
                  }
                ]
              }
            ],
            "exectype": "serial",
            "delay": 0
          }
        ];
        jEvent.launchCases(cases);
      }
    } else if(jFirer.is("#s-Hotspot_9")) {
      if(jFirer.data("jimHasToggle")) {
        jFirer.removeData("jimHasToggle");
        jEvent.undoCases(jFirer);
      } else {
        jFirer.data("jimHasToggle", true);
        event.backupState = true;
        event.target = jFirer;
        cases = [
          {
            "blocks": [
              {
                "actions": [
                  {
                    "action": "jimChangeStyle",
                    "parameter": [ {
                      "#s-18b22be3-a96f-4902-aeb3-6bdacacc8407 #s-Rectangle_40 > .backgroundLayer": {
                        "attributes": {
                          "background-color": "#CBCBCB"
                        }
                      }
                    },{
                      "#s-18b22be3-a96f-4902-aeb3-6bdacacc8407 #s-Rectangle_40": {
                        "attributes-ie": {
                          "-pie-background": "#CBCBCB",
                          "-pie-poll": "false"
                        }
                      }
                    } ],
                    "exectype": "serial",
                    "delay": 0
                  }
                ]
              }
            ],
            "exectype": "serial",
            "delay": 0
          }
        ];
        jEvent.launchCases(cases);
      }
    } else if(jFirer.is("#s-Hotspot_10")) {
      if(jFirer.data("jimHasToggle")) {
        jFirer.removeData("jimHasToggle");
        jEvent.undoCases(jFirer);
      } else {
        jFirer.data("jimHasToggle", true);
        event.backupState = true;
        event.target = jFirer;
        cases = [
          {
            "blocks": [
              {
                "actions": [
                  {
                    "action": "jimChangeStyle",
                    "parameter": [ {
                      "#s-18b22be3-a96f-4902-aeb3-6bdacacc8407 #s-Rectangle_41 > .backgroundLayer": {
                        "attributes": {
                          "background-color": "#CBCBCB"
                        }
                      }
                    },{
                      "#s-18b22be3-a96f-4902-aeb3-6bdacacc8407 #s-Rectangle_41": {
                        "attributes-ie": {
                          "-pie-background": "#CBCBCB",
                          "-pie-poll": "false"
                        }
                      }
                    } ],
                    "exectype": "serial",
                    "delay": 0
                  }
                ]
              }
            ],
            "exectype": "serial",
            "delay": 0
          }
        ];
        jEvent.launchCases(cases);
      }
    }
  })
  .on("pageload", ".s-18b22be3-a96f-4902-aeb3-6bdacacc8407 .pageload", function(event, data) {
    var jEvent, jFirer, cases;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getEventFirer();
    if(jFirer.is("#s-Label_40")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": [ "#s-Label_40" ],
                    "value": {
                      "action": "jimConcat",
                      "parameter": [ {
                        "action": "jimSubstring",
                        "parameter": [ {
                          "action": "jimSystemTime"
                        },"0","5" ]
                      }," PM" ]
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    }
  });