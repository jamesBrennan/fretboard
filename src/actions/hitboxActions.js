export const MOUSE_ENTERED_HITBOX = 'MOUSE_ENTERED_HITBOX';
export function mouseEnteredHitbox({string, fret, note, visible}) {
  return {
    type: MOUSE_ENTERED_HITBOX,
    payload: { string, fret, note, visible }
  }
}

export const MOUSE_LEFT_HITBOX = 'MOUSE_LEFT_HITBOX';
export function mouseLeftHitbox({string, fret, note, visible}) {
  return {
    type: MOUSE_LEFT_HITBOX,
    payload: { string, fret, note, visible }
  }
}

export const HITBOX_CLICKED = 'HITBOX_CLICKED';
export function hitboxClicked({string, fret, note, visible}) {
  return {
    type: HITBOX_CLICKED,
    payload: { string, fret, note, visible }
  }
}
