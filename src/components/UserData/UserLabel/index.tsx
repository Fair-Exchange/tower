import {
    Button,
    Grid,
    Typography,
} from '@material-ui/core';
import SvgIcon from '@material-ui/core/SvgIcon';
import * as React from 'react';
import {EditLabel} from '../../';

export interface UserLabelProps {
    // tslint:disable-next-line:no-any
    classes: any;
    // tslint:disable-next-line:no-any
    user: any;
    newLabelName: string;
    newLabelValue: string;
    newLabelScope: string;
    addNewLabel: () => void;
    editLabel: (key: string, value: string, scope: string) => void;
    deleteUserLabel: (uid: string, key: string, scope: string) => void;
    changeLabelName: (value: string) => void;
    changeLabelScope: (value: string) => void;
    changeLabelValue: (value: string) => void;
    isAddLabelModalOpened: boolean;
    isEditLabelModalOpened: boolean;
    openAddLabelModal: () => void;
    openEditLabelModal: (key: string, value: string, scope: string) => void;
    closeModal: () => void;
}

export class UserLabel extends React.Component<UserLabelProps> {
    public render() {
        const {
            classes,
            user,
            newLabelName,
            newLabelValue,
            newLabelScope,
        } = this.props;

        return (
            <React.Fragment>
                <Typography variant="h5" gutterBottom={true} component="h5">
                    Labels
                </Typography>
                <Grid container={true} justify={'flex-start'} spacing={16}>
                    {user.labels.map((label: any, i: number) => this.getLabelData(label, i, classes))/* tslint:disable-line:no-any */}
                    <Grid item={true}>
                        <Button onClick={e => this.openAddLabelModal()}>
                            <Typography variant="h6" component="h6" style={{color: '#3598D5'}}>
                                ADD NEW LABEL
                            </Typography>
                        </Button>
                    </Grid>
                    <EditLabel
                        editLabel={this.props.addNewLabel}
                        handleChangeLabelName={this.props.changeLabelName}
                        handleChangeLabelScope={this.props.changeLabelScope}
                        handleChangeLabelValue={this.props.changeLabelValue}
                        modalClose={this.modalClose}
                        name={newLabelName}
                        open={this.props.isAddLabelModalOpened}
                        scope={newLabelScope}
                        value={newLabelValue}
                    />
                    <EditLabel
                        editLabel={this.props.editLabel}
                        handleChangeLabelName={this.props.changeLabelName}
                        handleChangeLabelScope={this.props.changeLabelScope}
                        handleChangeLabelValue={this.props.changeLabelValue}
                        modalClose={this.modalClose}
                        name={newLabelName}
                        open={this.props.isEditLabelModalOpened}
                        scope={newLabelScope}
                        value={newLabelValue}
                    />
                </Grid>
            </React.Fragment>
        );
    }

    // tslint:disable-next-line:no-any
    private getLabelData = (label: any, i: number, classes: any) => {
        const {user} = this.props;
        switch (label.key) {
            case 'email':
                return (
                    <Grid item={true} key={i}>
                        <Grid
                            container={true}
                            justify={'space-between'}
                            className={classes.label}
                            style={{backgroundColor: '#43A047'}}
                        >
                            <Typography
                                onClick={e => this.openEditLabelModal(label.key, label.value, label.scope)}
                                className={classes.labelName}
                            >
                                email:{label.value}
                            </Typography>
                            <SvgIcon
                                onClick={e => this.deleteLabel(user.uid, label.key, label.scope)}
                                className={classes.icon}
                                viewBox="0 0 32 32"
                            >
                                <path
                                    d="m15,0.25c8.15675,0 14.75,6.59325 14.75,14.75c0,8.15675 -6.59325,14.75 -14.75,14.75c-8.15675,0 -14.75,-6.59325 -14.75,-14.75c0,-8.15675 6.59325,-14.75 14.75,-14.75m5.29525,7.375l-5.29525,5.29525l-5.29525,-5.29525l-2.07975,2.07975l5.29525,5.29525l-5.29525,5.29525l2.07975,2.07975l5.29525,-5.29525l5.29525,5.29525l2.07975,-2.07975l-5.29525,-5.29525l5.29525,-5.29525l-2.07975,-2.07975z"
                                    id="svg_1"
                                    fill="#ffffff"
                                    stroke="null"
                                />
                            </SvgIcon>
                        </Grid>
                    </Grid>
                );
            case 'phone':
                return (
                    <Grid item={true} key={i}>
                        <Grid
                            container={true}
                            justify={'space-between'}
                            className={classes.label}
                            style={{backgroundColor: '#009688'}}
                        >
                            <Typography
                                onClick={e => this.openEditLabelModal(label.key, label.value, label.scope)}
                                className={classes.labelName}
                            >
                                phone:{label.value}
                            </Typography>
                            <SvgIcon
                                onClick={e => this.deleteLabel(user.uid, label.key, label.scope)}
                                className={classes.icon}
                                viewBox="0 0 32 32"
                            >
                                <path
                                    d="m15,0.25c8.15675,0 14.75,6.59325 14.75,14.75c0,8.15675 -6.59325,14.75 -14.75,14.75c-8.15675,0 -14.75,-6.59325 -14.75,-14.75c0,-8.15675 6.59325,-14.75 14.75,-14.75m5.29525,7.375l-5.29525,5.29525l-5.29525,-5.29525l-2.07975,2.07975l5.29525,5.29525l-5.29525,5.29525l2.07975,2.07975l5.29525,-5.29525l5.29525,5.29525l2.07975,-2.07975l-5.29525,-5.29525l5.29525,-5.29525l-2.07975,-2.07975z"
                                    id="svg_1"
                                    fill="#ffffff"
                                    stroke="null"
                                />
                            </SvgIcon>
                        </Grid>
                    </Grid>
                );
            case 'document':
                return (
                    <Grid item={true} key={i}>
                        <Grid
                            container={true}
                            justify={'space-between'}
                            className={classes.label}
                            style={{backgroundColor: '#3F51B5'}}
                        >
                            <Typography
                                onClick={e => this.openEditLabelModal(label.key, label.value, label.scope)}
                                className={classes.labelName}
                            >
                                document:{label.value}
                            </Typography>
                            <SvgIcon
                                onClick={e => this.deleteLabel(user.uid, label.key, label.scope)}
                                className={classes.icon}
                                viewBox="0 0 32 32"
                            >
                                <path
                                    d="m15,0.25c8.15675,0 14.75,6.59325 14.75,14.75c0,8.15675 -6.59325,14.75 -14.75,14.75c-8.15675,0 -14.75,-6.59325 -14.75,-14.75c0,-8.15675 6.59325,-14.75 14.75,-14.75m5.29525,7.375l-5.29525,5.29525l-5.29525,-5.29525l-2.07975,2.07975l5.29525,5.29525l-5.29525,5.29525l2.07975,2.07975l5.29525,-5.29525l5.29525,5.29525l2.07975,-2.07975l-5.29525,-5.29525l5.29525,-5.29525l-2.07975,-2.07975z"
                                    id="svg_1"
                                    fill="#ffffff"
                                    stroke="null"
                                />
                            </SvgIcon>
                        </Grid>
                    </Grid>
                );
            default:
                return (
                    <Grid item={true} key={i}>
                        <Grid
                            container={true}
                            justify={'space-between'}
                            className={classes.label}
                            style={{backgroundColor: '#e0e0e0'}}
                        >
                            <Typography
                                onClick={e => this.openEditLabelModal(label.key, label.value, label.scope)}
                                style={{paddingTop: 8, color: '#757575', fontSize: 16, marginRight: 7}}
                            >
                                {label.key}
                            </Typography>
                            <SvgIcon
                                onClick={e => this.deleteLabel(user.uid, label.key, label.scope)}
                                className={classes.icon}
                                viewBox="0 0 32 32"
                            >
                                <path
                                    d="m15,0.25c8.15675,0 14.75,6.59325 14.75,14.75c0,8.15675 -6.59325,14.75 -14.75,14.75c-8.15675,0 -14.75,-6.59325 -14.75,-14.75c0,-8.15675 6.59325,-14.75 14.75,-14.75m5.29525,7.375l-5.29525,5.29525l-5.29525,-5.29525l-2.07975,2.07975l5.29525,5.29525l-5.29525,5.29525l2.07975,2.07975l5.29525,-5.29525l5.29525,5.29525l2.07975,-2.07975l-5.29525,-5.29525l5.29525,-5.29525l-2.07975,-2.07975z"
                                    id="svg_1"
                                    fill="#ffffff"
                                    stroke="null"
                                />
                            </SvgIcon>
                        </Grid>
                    </Grid>
                );
        }
    };

    private openAddLabelModal = () => {
        this.props.openAddLabelModal();
    };

    private openEditLabelModal = (key: string, value: string, scope: string) => {
        this.props.openEditLabelModal(key, value, scope);
    };

    private modalClose = () => {
        this.props.closeModal();
    };

    private deleteLabel = (uid: string, key: string, scope: string) => {
        this.props.deleteUserLabel(uid, key, scope);
    };
}
