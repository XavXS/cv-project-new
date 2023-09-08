export default function Education({id, update, remove, target}) {
    return (
      <div className='fields'>
        <button 
          className='remove-button'
          type='button'
          onClick={() => remove(id)}>
          remove
        </button>
        <label>
          <span>School</span>
          <input
            type='text'
            value={target.name}
            onChange={(e) => update(id, 'name', e.target.value)}
          />
        </label>
        <label>
          <span>Degree</span>
          <input
            type='text'
            value={target.degree}
            onChange={(e) => update(id, 'degree', e.target.value)}
          />
        </label>
        <label>
          <span>Location</span>
          <input
            type='text'
            value={target.location}
            onChange={(e) => update(id, 'location', e.target.value)}
          />
        </label>
        <label>
          <span>From</span>
          <input
            type='text'
            value={target.from}
            onChange={(e) => update(id, 'from', e.target.value)}
          />
        </label>
        <label>
          <span>To</span>
          <input
            type='text'
            value={target.to}
            onChange={(e) => update(id, 'to', e.target.value)}
          />
        </label>
      </div>
    );
  }