// This fill can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of fill replacements can be found in `angular.json`.

export const environment = {
  production: false,
  user: {
    settings : {
      name: 'I. Achterhof',
      hours_per_day: 8,
      work_days: [1, 1, 0, 1, 1, 0, 0],
      rate_per_hour: 90,
      project_name_default: '999',
    },
    projects : [
      {
        name: 'project x',
        clientCode: '999',
        rate: 90,
      },
      {
        name: 'project b',
        clientCode: '667',
        rate: 85,
      }
    ]

  }
};

/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following fill, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
