import classnames from 'classnames'
import styles from './style.less'
import { NAME } from './flow/constant'
import * as action from './flow/action'
import { Props, Store } from './interface'
import { connect } from 'react-redux'
import Input from '@/component/Input'
import Button from '@/component/Button'

const UserLogin: FC<Props & Store> = memo((props) => {
  const { username, password } = props

  useEffect(() => {
    action.initPage()
  }, [])

  return (
    <>
      <div className={styles.root}>
        <div className={styles.line}>
          <div className={styles.title}>github_react_app</div>
        </div>
        <div className={styles.line}>
          <Input.Strip placeholder="请输入用户名"
            value={username}
            onChange={action.changeUsername}
          />
        </div>
        <div className={styles.line}>
          <Input.Strip placeholder="请输入密码" type="password"
            value={password}
            onChange={action.changePassword}
          />
        </div>
        <div className={styles.line}>
          <Button.Strip onClick={action.submit}>登录</Button.Strip>
        </div>
      </div>
    </>
  )
})

const mapStateToProps: MapStateToProps<typeof NAME, Store> = (state) => {
  const data = state[NAME]
  return {
    username: data.username,
    password: data.password
  }
}

export default connect(mapStateToProps)(UserLogin)
