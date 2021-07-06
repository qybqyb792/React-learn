import React, { useState } from 'react'

export default function ComplexHookState() {
  const [friends, setFriends] = useState(['zytq', 'qyb'])
  const [students, setStudents] = useState([
    { id: 110, name: 'qyb', age: 18 },
    { id: 111, name: 'qyb', age: 19 },
    { id: 112, name: 'lgc', age: 20 },
    { id: 113, name: 'scg', age: 21 },
  ])

  // 错误做法
  function addFriend() {
    friends.push('qqq')
    setFriends(friends)
  }

	function incrementAgeWithIndex(index) {
		const newStudent= [...students]
		newStudent[index].age += 1;
		setStudents(newStudent)
	}

  return (
    <div>
      <ul>
        {friends.map((item, index) => {
          return <li key={item}>{item}</li>
        })}
      </ul>
      <button onClick={(e) => setFriends([...friends, 'tom'])}>添加朋友</button>
      {/* 错误做法 */}
      <button onClick={addFriend}>添加朋友</button>

      <h2>学生列表</h2>
      <ul>
        {students.map((item, index) => {
          return (
            <li key={item.id}>
              <span>
                名字: {item.name} 年龄: {item.age}
              </span>
							<button onClick={e => incrementAgeWithIndex(index)}>年龄+1</button>
            </li>
          )
        })}
      </ul>
    </div>
  )
}
