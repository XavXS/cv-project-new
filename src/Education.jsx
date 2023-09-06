export default function Education({id, update, target}) {
    return (
      <div className='fields'>
        <input
          type='text'
          value={target.name}
          onChange={(e) => update(id, 'name', e.target.value)}
        />
        <input
          type='text'
          value={target.degree}
          onChange={(e) => update(id, 'degree', e.target.value)}
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