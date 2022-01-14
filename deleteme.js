const fs = require('fs')

fs.writeFileSync('D:/out.json', JSON.stringify(JSON.parse(`
{
  "g": 1630179551294,
  "v": {
    "reader": {
      "iosBuild": 116,
      "androidBuild": 120,
      "androidUpdateLink": "",
      "iosUpdateLink": ""
    },
    "wallet": {
      "iosBuild": 116,
      "androidBuild": 120,
      "androidUpdateLink": "",
      "iosUpdateLink": ""
    }
  },
  "qcr": {
    "name": "Quebec",
    "version": "1.0",
    "date": "2021-07-27",
    "conditions": [
      {
        "id": "second_dose",
        "type": "Immunization",
        "cvx": [207, 208, 210, 211],
        "description": "Deuxième dose de vaccin bi-dose",
        "daysAgo": 7,
        "timeGranularity": "day",
        "doseNumber": 2
      },
      {
        "id": "third_dose",
        "type": "Immunization",
        "cvx": [207, 208, 210, 211],
        "description": "Troisième dose de vaccin bi-dose",
        "daysAgo": 7,
        "timeGranularity": "day",
        "doseNumber": 3
      },
      {
        "id": "first_dose",
        "type": "Immunization",
        "cvx": [207, 208, 210, 211],
        "description": "Première dose de vaccin bi-dose",
        "daysAgo": 21,
        "timeGranularity": "day",
        "doseNumber": 1
      },
      {
        "id": "mono_dose",
        "type": "Immunization",
        "cvx": [212],
        "description": "Une dose de vaccin uni-dose",
        "daysAgo": 14,
        "timeGranularity": "day"
      },
      {
        "id": "infection_pre_vax",
        "type": "DiagnosticReport",
        "description": "Infection confirmée pré-vaccination",
        "filters": [
          {
            "status": "Final",
            "conclusion": "Positive",
            "code.coding[0].system": "https://loinc.org",
            "code.coding[0].code": "94759-8"
          }
        ],
        "daysAgo": 28,
        "timeGranularity": "day"
      },
      {
        "id": "recent_infection",
        "type": "DiagnosticReport",
        "description": "Infection confirmée dans les 6 derniers mois et 10 jours post-infection",
        "filters": [
          {
            "status": "Final",
            "conclusion": "Positive",
            "code.coding[0].system": "https://loinc.org",
            "code.coding[0].code": "94759-8"
          }
        ],
        "daysAgo": 10,
        "maxDaysAgo": 182,
        "timeGranularity": "day"
      }
    ],
    "rules": [
      {
        "name": "two_vaccine_doses",
        "conditionsMatching": [
          { "id": "first_dose" },
          {
            "id": "second_dose",
            "delayFromPreviousEvent": 14,
            "delayGranularity": "day"
          }
        ]
      },
      {
        "name": "two_vaccine_doses",
        "conditionsMatching": [
          { "id": "first_dose" },
          {
            "id": "third_dose",
            "delayFromPreviousEvent": 14,
            "delayGranularity": "day"
          }
        ]
      },
      {
        "name": "two_vaccine_doses",
        "conditionsMatching": [
          { "id": "second_dose" },
          {
            "id": "third_dose",
            "delayFromPreviousEvent": 14,
            "delayGranularity": "day"
          }
        ]
      },
      {
        "name": "one_janssen_dose",
        "conditionsMatching": [{ "id": "mono_dose" }]
      },
      {
        "name": "infection_and_dose",
        "conditionsMatching": [
          { "id": "infection_pre_vax" },
          {
            "id": "second_dose",
            "delayFromPreviousEvent": 21,
            "delayGranularity": "day"
          }
        ]
      },
      {
        "name": "infection_and_dose",
        "conditionsMatching": [
          { "id": "infection_pre_vax" },
          {
            "id": "first_dose",
            "delayFromPreviousEvent": 21,
            "delayGranularity": "day"
          }
        ]
      },
      {
        "name": "infection_and_dose",
        "conditionsMatching": [
          { "id": "infection_pre_vax" },
          {
            "id": "third_dose",
            "delayFromPreviousEvent": 21,
            "delayGranularity": "day"
          }
        ]
      }
    ]
  }
}

`), null, 2))