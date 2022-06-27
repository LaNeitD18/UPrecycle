import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { getCampaigns } from "../../api/campaign";
import { AppThunk } from "../store";

interface CampaignState {
  id: string;
  title: string;
  address?: string;
  description?: string;
  date: Date;
  contentUrl?: string;
  imageUrl?: string;
}

interface ListCampaignsState {
  campaigns: CampaignState[];
  limit: number;
  page: number;
  total: number;
  isLoading: boolean;
  error: string | null;
}

const initialState: ListCampaignsState = {
  campaigns: [],
  limit: 10,
  page: 0,
  total: 0,
  isLoading: false,
  error: null
};

const startLoading = (state: ListCampaignsState) => {
  state.isLoading = true;
};

const loadingFailed = (
  state: ListCampaignsState,
  action: PayloadAction<string>
) => {
  state.isLoading = false;
  state.error = action.payload;
};

export const campaignsSlice = createSlice({
  name: "campaigns",
  initialState,
  reducers: {
    getListCampaignsStart: startLoading,
    getListCampaignsSuccess(state, { payload }: PayloadAction<any>) {
      const { data, limit, page, total } = payload;
      return {
        campaigns: data,
        limit,
        page,
        total,
        isLoading: false,
        error: null
      };
    },
    getListCampaignsFailure: loadingFailed
  }
});

export const {
  getListCampaignsStart,
  getListCampaignsSuccess,
  getListCampaignsFailure
} = campaignsSlice.actions;

export default campaignsSlice.reducer;

export const fetchListCampaigns = (): AppThunk => async (dispatch) => {
  try {
    dispatch(getListCampaignsStart());
    const response = await getCampaigns();
    dispatch(getListCampaignsSuccess(response.data));
  } catch (err: any) {
    dispatch(getListCampaignsFailure(err.toString()));
  }
};
