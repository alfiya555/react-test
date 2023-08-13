import {Input, Button, Flex, Box, Switch, Icon, Textarea, Avatar} from "@chakra-ui/react";
import {useCallback, useMemo, useState} from "react";
import { Formik, Form, Field } from "formik";
import { FormControl, FormLabel } from "@chakra-ui/react";
import {useTranslation} from "react-i18next";
import {MdPhotoCamera} from "react-icons/md";

const formItems = [
    { code: "name" },
    { code: "email", type: "email" },
    { code: "phone" },
    { code: "address" },
    { code: "country" },
    { code: "state" },
    { code: "city" },
    { code: "zip" },
    { code: "about", type: "textarea" },
];

export default function UserForm({ formValues, setFormValues, image, setImage }: { formValues: Record<string, string>, setFormValues: any, image: string | null, setImage: any }) {
    const { t } = useTranslation();
    const [isHovered, setIsHovered] = useState(false);
    const handleChange = useCallback((e: any) => {
        setImage(URL.createObjectURL(e.target?.files?.[0]) || null);
    }, []);
    const onSubmit = useCallback((values: Record<string, string>) => {
        setFormValues(values);
    }, []);
    const imageUrl = useMemo(() => {
        return image || undefined;
    }, [image]);

    return (
        <Flex direction='row' width='80vw' gap={4} m={4}>
            <Flex p={6} height={'460px'} justifyContent={'center'} flexDirection={'column'} gap={'30px'} alignItems={'center'} borderRadius='8px' flex={1} boxShadow={'rgba(145, 158, 171, 0.2) 0px 0px 2px 0px, rgba(145, 158, 171, 0.12) 0px 12px 24px -4px'}>
                <Flex width={'126px'} height={'126px'} borderRadius={'50%'} position={'relative'} onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
                    <Avatar size='sm' height="100%"
                            width="100%"
                            position="absolute"
                            top="0"
                            left="0"
                            src={imageUrl}
                    />
                    {isHovered && <Flex zIndex={1} width={'126px'} height={'126px'} borderRadius={'50%'} backgroundColor={'rgba(14, 13, 14, 0.6)'} flexDirection={'column'} gap={'5px'} alignItems={'center'} justifyContent={'center'}>
                        <Box><Icon color='white' boxSize={6} as={MdPhotoCamera}/></Box>
                        <Box color={'white'} fontSize={'12px'}>Upload photo</Box>
                    </Flex>}
                    <Input
                        type="file"
                        height="100%"
                        width="100%"
                        position="absolute"
                        top="0"
                        left="0"
                        opacity="0"
                        aria-hidden="true"
                        accept="image/*"
                        zIndex={1}
                        onChange={handleChange}
                    />
                </Flex>
                <Box fontSize={'10px'} color='rgb(99, 115, 129)'>Allowed *.jpeg, *.jpg, *.png, *.gif max size of 3.1 MB</Box>
                <Flex dir={'row'} alignItems={'center'} gap={'10px'}>
                    <Box>{t(`userForm.publicProfile`)}</Box><Switch colorScheme={'green'} />
                </Flex>
                <Button type="submit" colorScheme="orange" width="full">
                    { t('userForm.deleteUser') }
                </Button>
            </Flex>
            <Flex p={6} borderRadius='8px' rounded="md" flex={2} boxShadow={'rgba(145, 158, 171, 0.2) 0px 0px 2px 0px, rgba(145, 158, 171, 0.12) 0px 12px 24px -4px'} >
                <Formik
                    initialValues={formValues}
                    onSubmit={onSubmit}
                >
                    {({ handleSubmit, errors, touched }) => (
                        <Form onSubmit={handleSubmit}>
                            <Flex flexDirection={'row'} flexWrap={'wrap'} gap={'8px'} mb={4}>
                                {formItems.map((item) => (
                                    <FormControl key={item.code} as={Flex} flexDirection={'column'} width={item.type === 'textarea' ? '100%' : 'calc(50% - 8px)'}>
                                        <FormLabel htmlFor={item.code}>{ t(`userForm.${item.code}`) }</FormLabel>
                                        <Field
                                            as={item.type === 'textarea' ? Textarea : Input}
                                            id={item.code}
                                            name={item.code}
                                            placeholder={t(`userForm.${item.code}`)}
                                            type={item.type}
                                            variant="outline"
                                        />
                                    </FormControl>
                                ))}
                            </Flex>
                            <Flex flexDirection={'row'} justifyContent={'flex-end'}>
                                <Button type="submit" colorScheme="blackAlpha">
                                    { t('userForm.saveChanges') }
                                </Button>
                            </Flex>
                        </Form>
                    )}
                </Formik>
            </Flex>
        </Flex>
    );
}