import { helloFromPackageB } from '@restfulhead/my-lib-b'

export function helloFromPackageA() {
    return 'hello from package A and ' + helloFromPackageB() 
}