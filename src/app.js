export class App {
  configureRouter(config, router) {
    config.title = 'Memorable Password';

    config.map([{
      route: ['', 'create'],
      name: 'create',
      moduleId: './create',
      nav: true,
      title: 'Create'
    }, ]);

    this.router = router;
  }
}
