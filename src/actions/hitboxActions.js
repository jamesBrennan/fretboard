export const MOUSE_ENTERED_HITBOX = 'MOUSE_ENTERED_HITBOX';
export function mouseEnteredHitbox(string, fret) {
  return {
    type: MOUSE_ENTERED_HITBOX,
    payload: {
      string: string,
      fret: fret
    }
  }
}

export const MOUSE_LEFT_HITBOX = 'MOUSE_LEFT_HITBOX';
export function mouseLeftHitbox(string, fret) {
  return {
    type: MOUSE_LEFT_HITBOX,
    payload: {
      string: string,
      fret: fret
    }
  }
}

export const HITBOX_CLICKED = 'HITBOX_CLICKED';
export function hitboxClicked(string, fret) {
  return {
    type: HITBOX_CLICKED,
    payload: {
      string: string,
      fret: fret
    }
  }
}
