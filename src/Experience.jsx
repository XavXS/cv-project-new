export default function Experience({id, update, target}) {
    return(
      <div className='fields' key={id}>
        <input
          type='text'
          value={target.name}
          onChange={(e) => update(id, 'name', e.target.value)}
        />
        <input
          type='text'
          value={target.role}
          onChange={(e) => update(id, 'role', e.target.value)}
        />
        <input
          type='text'
          value={target.location}
          onChange={(e) => update(id, 'location', e.target.value)}
        />
        <input
          type='text'
          value={target.from}
          onChange={(e) => update(id, 'from', e.target.value)}
        />
        <input
          type='text'
          value={target.to}
          onChange={(e) => update(id, 'to', e.target.value)}
        />
      </div>
    );
  }