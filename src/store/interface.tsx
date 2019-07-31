export interface Store {
  id: number | undefined
  role: string
  username: string
  auth: string
  loading: boolean
  animationType: ''
  | 'leftInto'
  | 'rightInto'
  | 'followLeftInto'
  | 'followRightInto'
  | 'leftLeave'
  | 'rightLeave'
  animationIng: boolean
}
