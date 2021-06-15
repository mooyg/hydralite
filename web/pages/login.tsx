import { FaGithub, FaTwitter, FaDiscord, FaGoogle } from 'react-icons/fa'
import styles from '../styles/Login.module.scss'

const Login = () => {
    return (
        <div className={styles.screen}>
            <img src="/logo.png" alt="Logo" className={styles.logo} />
            <div className={styles.loginCard}>
                <h2 className={styles.heading}>Sign in to ( Something ).</h2>
                <Button
                    icon={<FaGoogle className={styles.icon} />}
                    text="Continue with Google"
                />
                <Button
                    icon={<FaGithub className={styles.icon} />}
                    text="Continue with Github"
                />
                <Button
                    icon={<FaDiscord className={styles.icon} />}
                    text="Continue with Discord"
                />
                <Button
                    icon={<FaTwitter className={styles.icon} />}
                    text="Continue with Twitter"
                />
                <div style={{ height: '1rem' }}></div>
            </div>
        </div>
    )
}

const Button = ({ icon, text }) => {
    return (
        <div className={styles.button}>
            {icon}
            <h3>{text}</h3>
        </div>
    )
}

// const Login = () => {
//   return (
//     <Flex
//       minH="100vh"
//       height="full"
//       justifyContent="center"
//       alignItems="center"
//     >
//       <Center>
//         <Box rounded="md" bgColor="whiteAlpha.100">
//           <Stack
//             spacing={2}
//             my={50}
//             px={10}
//             align={'center'}
//             maxW={'md'}
//             w={'full'}
//           >
//             <Text fontWeight="extrabold" fontSize="xl" mb={2}>
//               Sign in to HydraLite.
//             </Text>
//             <Button w={'full'} variant={'outline'} leftIcon={<FaFacebook />}>
//               <Center>
//                 <Text>Continue with Facebook</Text>
//               </Center>
//             </Button>

//             <Button w={'full'} variant={'outline'} leftIcon={<FcGoogle />}>
//               <Center>
//                 <Text>Sign in with Google</Text>
//               </Center>
//             </Button>

//             <Button w={'full'} variant={'outline'} leftIcon={<FaTwitter />}>
//               <Center>
//                 <Text>Continue with Twitter</Text>
//               </Center>
//             </Button>

//             <Button w={'full'} variant={'outline'} leftIcon={<FaDiscord />}>
//               <Center>
//                 <Text>Continue with Dicord</Text>
//               </Center>
//             </Button>
//           </Stack>
//         </Box>
//       </Center>
//     </Flex>
//   );
// };

export default Login
