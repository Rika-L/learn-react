import './index.css'

export default function Card() {
  return (
    <div className="card">
      <header>
        <div>标题</div>
        <div>副标题</div>
      </header>
      <main>
        内容区域
      </main>
      <footer>
        <button type="button">确认</button>
        <button type="button">取消</button>
      </footer>
    </div>
  )
}
