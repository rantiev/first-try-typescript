import * as _ from 'lodash'

interface Face {
  eyes: number;
  nose: number;
}

const face: Face = {
  eyes: 2,
  nose: 1,
}

const faceComponents: string[] = _.keys(face)
console.log(`faceComponents - ${faceComponents}`)

const flowUse: number = _.flow([_.add])(1, 2, 3)
console.log(`flow use - ${flowUse}`)