import { OneSignal } from 'react-native-onesignal'

export function tagUserInfoCreate() {
  OneSignal.User.addTags({
    user_name: 'Bruno',
    user_email: 'bruno.ds.azevedo@gmail.com',
  })
}

export function tagCartUpdate(itemsCount: string) {
  OneSignal.User.addTag('cart_items_count', itemsCount)
}
