export default function Experience({id, update, target}) {
    return(
      <div className='fields' key={id}>
        <label>
          <span>Company</span>
          <input
          type='text'
          value={target.name}
          onChange={(e) => update(id, 'name', e.target.value)}
        />
        </label>
        <label>
          <span>Role</span>
          <input
          type='text'
          value={target.role}
          onChange={(e) => update(id, 'role', e.target.value)}
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