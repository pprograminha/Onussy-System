'use strict'
class UsersOn {
  public usersOnGetRequest() {
    $('.users__usero').remove()
    app.post('/api/users/online', () => {
      $('.loading').remove()
      this.getUserOn()
    })
  }
  private getUserOn() {
    app.get('/api/users/online', function (users: IUsers[]) {
      if (!users) return
      $('.users__online span.count').text(users.length)
      $.map(users, function (user, key) {
        _('.users__user-on')
          .Child({
            Index: key,
            Element: 'div',
            Class: '.users__usero',
          })
          .Child({
            Element: 'div',
            Class: '.users__user-image',
            Parent: '.users__user-on .users__usero',
          })
          .Child({
            Element: 'img',
            Attr: [
              {
                name: 'src',
                value: `${app.baseUrl}/uploads/${user.user_image}`,
              },
            ],
            Class: '.users__user-img',
            Parent: '.users__user-on .users__user-image',
          })
          .Child({
            Element: 'div',
            Class: '.users__user-name',
            Content: `${user.firstname} ${user.lastname}`,
            Parent: '.users__user-on .users__usero',
          })
      })
    })
  }
}
const usersOn = new UsersOn()
usersOn.usersOnGetRequest()
