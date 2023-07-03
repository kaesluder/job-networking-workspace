export class TestValues {
  static contactMethods1 = [
    { method: 'email', address: 'jane@example.com' },
    { method: 'linkedin', address: 'linkedin' },
  ];

  static contact1 = {
    name: 'jane doe',
    title: 'queen of the nile',
    methods: this.contactMethods1,
  };
}
